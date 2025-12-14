#!/usr/bin/env python3
import threading
import RPi.GPIO as GPIO
import time
from time import sleep
from flask import Flask, request, jsonify
import Freenove_DHT as DHT
from flask_cors import CORS
from flask_sock import Sock
import requests
from PCF8574 import PCF8574_GPIO
from Adafruit_LCD1602 import Adafruit_CharLCD
import json



# Disable PWM destructor to prevent shutdown errors
def safe_del(self):
    pass

GPIO.PWM.__del__ = safe_del

# ---------------- GPIO PIN SETUP ----------------
# DHT sensor
DHTPin = 16
dht = DHT.DHT(DHTPin)

# RGB LED pins
rgb_pins = [29, 31, 33]  # Pins --> R:29, G:31, B:33
pwmRed = pwmGreen = pwmBlue = None

# Buttons 
blueButtonPin = 40 
greenButtonPin = 37
redButtonPin = 38
yellowButtonPin = 36
buttonPins = [blueButtonPin, greenButtonPin, redButtonPin, yellowButtonPin]



# Initialize GPIO
GPIO.setmode(GPIO.BOARD)
GPIO.setup(rgb_pins, GPIO.OUT)
GPIO.output(rgb_pins, GPIO.HIGH)  # start off
GPIO.setup(buttonPins, GPIO.IN, pull_up_down=GPIO.PUD_UP)

# Setting frequency to 2kHz
pwmRed = GPIO.PWM(rgb_pins[0], 2000)
pwmGreen = GPIO.PWM(rgb_pins[1], 2000)
pwmBlue = GPIO.PWM(rgb_pins[2], 2000)
pwmRed.start(0)
pwmGreen.start(0)
pwmBlue.start(0)

# LCD DISPLAY
PCF8574_address = 0x27  # I2C address of the PCF8574 chip.
PCF8574A_address = 0x3F  # I2C address of the PCF8574A chip.
# Create PCF8574 GPIO adapter.
try:
    mcp = PCF8574_GPIO(PCF8574_address)
except:
    try:
        mcp = PCF8574_GPIO(PCF8574A_address)
    except:
        print ('I2C Address Error !')
        exit(1)
# GPIO PINS FOR LCD
lcd = Adafruit_CharLCD(pin_rs=0, pin_e=2, pins_db=[4,5,6,7], GPIO=mcp)

mcp.output(3, 1)  # turn backlight on
lcd.begin(16, 2)
lcd.clear() # Needed to make LCD not instantly shut off (complex electronical black magic) only other fix is using threads which SUCK!!!
lcd.numlines = 2
lcd.numcols = 16

# ---------------- Helper Functions ----------------
def setColor(r_val, g_val, b_val): 
    """
    Set RGB LED color (0-255).
    CONVERTING DUTY 0-100 TO RGB 0-255

    THREE STEPS:
    - CALIBRATE (some colors are brigther then others)

    - Define & configure dutycycles (thank god I payed attention in class)

    - decide on ANODE version (common anode for my FREENOVE RGBLED module)
    """
    # Calibration multipliers for better visual balance
    red_multiplier =  0.9
    green_multiplier = 1.0
    blue_multiplier = 1.2

    # Convert 0-255 to 0-100 PWM and apply multipliers
    r_pwm = min(max(r_val / 255 * 100 * red_multiplier, 0), 100)
    g_pwm = min(max(g_val / 255 * 100 * green_multiplier, 0), 100)
    b_pwm = min(max(b_val / 255 * 100 * blue_multiplier, 0), 100)

    # Invert for common anode
    pwmRed.ChangeDutyCycle(100 - r_pwm)  # RED
    pwmGreen.ChangeDutyCycle(100 - g_pwm)   # GREEN
    pwmBlue.ChangeDutyCycle(100 - b_pwm)    # BLUE

def read_dht():
    """Read DHT11 sensor and return humidity and temperature."""
    for i in range(15):  # retry up to 15 times
        result = dht.readDHT11()
        if result == dht.DHTLIB_OK:
            return dht.humidity, dht.temperature
        time.sleep(0.1)
    return None, None

def buttons():
    while True:
        if GPIO.input(blueButtonPin)==GPIO.LOW: # if button is pressed
            print ('BLUE button>>>')     # print information on terminal
            time.sleep(0.35)
        elif GPIO.input(redButtonPin)==GPIO.LOW:
            print ('RED button>>>')
            time.sleep(0.35)
        elif GPIO.input(greenButtonPin)==GPIO.LOW:
            print ('GREEN button>>>')
            time.sleep(0.35)
        elif GPIO.input(yellowButtonPin)==GPIO.LOW:
            print ('YELLOW button>>>')
            time.sleep(0.35)

def get_button_states():
    return {
        "blue": GPIO.input(blueButtonPin) == GPIO.LOW,
        "red": GPIO.input(redButtonPin) == GPIO.LOW,
        "green": GPIO.input(greenButtonPin) == GPIO.LOW,
        "yellow": GPIO.input(yellowButtonPin) == GPIO.LOW
    }
    


def cleanup():
    lcd.clear()
    pwmRed.stop()
    pwmGreen.stop()
    pwmBlue.stop()
    GPIO.cleanup()
# ---------------- Flask Server ----------------
app = Flask(__name__)
CORS(app)
sock = Sock(app)
@app.route("/led", methods=["POST"])
def led_control():
    data = request.json
    state = data.get("state")
    color = data.get("color", {"r": 0, "g": 0, "b": 0})

    if state == "on":
        setColor(color["r"], color["g"], color["b"])
    elif state == "off":
        setColor(0, 0, 0)

    return jsonify({"ok": True, "state": state, "color": color})


@app.route("/sensor", methods=["GET"])
def sensor():
    humidity, temperature = read_dht()

    return jsonify({
        "temperature": temperature,
        "humidity": humidity,
        "device": "raspberry-pi-5"
    })


# ---------------- WebSocket ----------------
ws_clients = set()

@sock.route('/ws')
def websocket(ws):
    ws_clients.add(ws)
    # send initial state
    ws.send(json.dumps(get_button_states()))
    try:
        while True:
            msg = ws.receive()  # keep connection alive
            if msg is None:
                break
    finally:
        ws_clients.remove(ws)

def broadcast_buttons():
    """Broadcast button changes only when state changes"""
    last_state = get_button_states() # use helper
    while True:
        current_state = get_button_states()
        if current_state != last_state:
            msg = json.dumps(current_state)
            for ws in list(ws_clients):
                try:
                    ws.send(msg)
                except:
                    ws_clients.remove(ws)
            last_state = current_state
        time.sleep(0.05)  # check every 50ms




# ---------------- LCD Node.js health check ----------------
def update_lcd_health():
    while True:
        try:
            requests.get("http://10.10.0.188:3000/health", timeout=0.5)
            lcd.setCursor(0,0)
            lcd.message("Website Online!  ")
        except:
            lcd.setCursor(0,0)
            lcd.clear()
            lcd.message("Website Offline! ")
        time.sleep(5)



# ---------------- Main ----------------
if __name__ == "__main__":
    try:

        # Start WebSocket broadcast thread
        threading.Thread(target=broadcast_buttons, daemon=True).start()

        # LCD and Node.js reporting thread
        threading.Thread(target=update_lcd_health, daemon=True).start()

        try:
            requests.post("http://10.10.0.188:3000/api/pi-data",
                          json={"script": "pi_server.py", "status": "WORKING"}, timeout=2)
            setColor(0, 0, 0)
            print("Sent boot confirmation to backend (node.js)")
        except Exception as e:
            print("Failed to send status to Node.js:", e)
            requests.post("http://10.10.0.188:3000/api/pi-data",
                          json={"script": "pi_server.py", "status": "NOT WORKING", "error": str(e)}, timeout=2)


        print("Pi server running on http://0.0.0.0:5000")
        print("PYTHON SERVER STATUS: Flask backend started successfully!")
        app.run(host="0.0.0.0", port=5000, debug=False, use_reloader=False)
        print("PYTHON SERVER STATUS: Flask backend has stopped succesfully!")

    except KeyboardInterrupt:
        print("Stopping server...")
    finally:
        cleanup()

