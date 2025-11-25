// raspberry-pi/pi-server.js
const express = require("express");
const app = express();
app.use(express.json());

// --- GPIO LED (pin 17) ---
const Gpio = require("onoff").Gpio;
const led = new Gpio(17, "out");

// LED Control
app.post("/led", (req, res) => {
    const { state } = req.body;

    if (state === "on") led.writeSync(1);
    if (state === "off") led.writeSync(0);

    console.log("LED state:", state);

    res.json({ ok: true, state });
});

// --- Example sensors (replace later) ---
app.get("/sensor", (req, res) => {
    res.json({
        temperature: 22.1,
        humidity: 41.5,
        device: "raspberry-pi-5"
    });
});

// --- Autoregister this device in the main API ---
const axios = require("axios");

async function registerDevice() {
    try {
        await axios.post("http://10.10.0.188:3000/device", {
            device_name: "Raspberry Pi 5",
            device_purpose: "Collect sensor data",
            device_ip: "10.10.0.155",
            status: "online"
        });
        console.log("Device registered.");
    } catch (err) {
        console.log("Did not register (API offline?)");
    }
}

app.listen(5000, "0.0.0.0", () => {
    console.log("Pi server running on http://0.0.0.0:5000");
    registerDevice();
});
