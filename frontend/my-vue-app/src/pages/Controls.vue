<script setup>
import axios from 'axios';
import { useWebSocket } from '@vueuse/core'
import { ref, onMounted, onUnmounted, watch } from 'vue'

// ------------------- LED CONTROL -------------------
const ledState = ref('off');
const color = ref({ r: 0, g: 0, b: 0 });
const PI_SERVER = 'http://10.10.0.151:5000';

async function turnOn() {
  try {
    await axios.post(`${PI_SERVER}/led`, { state: 'on', color: color.value });
    ledState.value = 'on';
  } catch (err) {
    console.error(err);
  }
}

async function turnOff() {
  try {
    await axios.post(`${PI_SERVER}/led`, { state: 'off' });
    ledState.value = 'off';
  } catch (err) {
    console.error(err);
  }
}

async function updateColor() {
  if (ledState.value === 'on') {
    try {
      await axios.post(`${PI_SERVER}/led`, { state: 'on', color: color.value });
    } catch (err) {
      console.error(err);
    }
  }
}

// ------------------- BUTTON STATUS -------------------
const buttonState = ref({
  blue: false,
  red: false,
  green: false,
  yellow: false
})

const { status, data, send, open, close } = useWebSocket('ws://10.10.151:5000/ws', {
  autoReconnect: true,
  heartbeat: {
    interval: 10000,
    message: 'ping',
  },
})

// Listen for backend messages
watch(data, (msg) => {
  if (!msg) return
  try {
    const parsed = JSON.parse(msg)
    buttonState.value = {
      blue: parsed.blue,
      red: parsed.red,
      green: parsed.green,
      yellow: parsed.yellow
    }
  } catch (e) {
    console.error("Invalid WS message", msg)
  }
})

// Close socket on unmount
// onUnmounted(() => {
//   close()
// })

</script>


<template>
  <div class="dashboard">
    <!-- Left Column: LED Control -->
    <div class="led-control">
      <h2>RGB LED Control</h2>
      <div>
        <button @click="turnOn">Turn On</button>
        <button @click="turnOff">Turn Off</button>
        <p>Status: {{ ledState }}</p>
      </div>
      <div>
        <h3>Adjust Color (0-100)</h3>
        <label>Red: <input type="range" min="0" max="100" v-model.number="color.r" @input="updateColor"/></label>
        <label>Green: <input type="range" min="0" max="100" v-model.number="color.g" @input="updateColor"/></label>
        <label>Blue: <input type="range" min="0" max="100" v-model.number="color.b" @input="updateColor"/></label>
        <p>Current: R={{ color.r }}, G={{ color.g }}, B={{ color.b }}</p>
      </div>
    </div>

    <!-- Right Column: Pi Button Status -->
    <div class="button-status">
      <h2>Pi Button States</h2>
      <div :style="{ color: buttonState.blue ? 'blue' : 'gray' }">Blue Button: {{ buttonState.blue ? 'Pressed' : 'Released' }}</div>
      <div :style="{ color: buttonState.green ? 'green' : 'gray' }">Green Button: {{ buttonState.green ? 'Pressed' : 'Released' }}</div>
      <div :style="{ color: buttonState.red ? 'red' : 'gray' }">Red Button: {{ buttonState.red ? 'Pressed' : 'Released' }}</div>
      <div :style="{ color: buttonState.yellow ? 'goldenrod' : 'gray' }">Yellow Button: {{ buttonState.yellow ? 'Pressed' : 'Released' }}</div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: 20px auto;
  font-family: sans-serif;
}
.led-control, .button-status {
  width: 45%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.led-control button {
  margin-right: 10px;
  margin-bottom: 10px;
}
.led-control label {
  display: block;
  margin-bottom: 5px;
}
.led-control input[type="range"] {
  width: 100%;
}
.button-status div {
  margin: 8px 0;
  font-weight: bold;
}
</style>
