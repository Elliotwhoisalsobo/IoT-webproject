<script setup>
import { ref } from 'vue';
import axios from 'axios';

// LED state
const ledState = ref('off');
const color = ref({ r: 0, g: 0, b: 0 });

// Pi server URL
const PI_SERVER = 'http://10.10.0.151:5000';

// Turn LED on with current color
async function turnOn() {
  try {
    await axios.post(`${PI_SERVER}/led`, {
      state: 'on',
      color: color.value
    });
    ledState.value = 'on';
  } catch (err) {
    console.error(err);
  }
}

// Turn LED off
async function turnOff() {
  try {
    await axios.post(`${PI_SERVER}/led`, {
      state: 'off'
    });
    ledState.value = 'off';
  } catch (err) {
    console.error(err);
  }
}

// Change color sliders
async function updateColor() {
  if (ledState.value === 'on') {
    try {
      await axios.post(`${PI_SERVER}/led`, {
        state: 'on',
        color: color.value
      });
    } catch (err) {
      console.error(err);
    }
  }
}
</script>

<template>
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
</template>

<style scoped>
.led-control {
  max-width: 400px;
  margin: 20px auto;
  font-family: sans-serif;
}
button {
  margin-right: 10px;
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input[type="range"] {
  width: 100%;
}
</style>
