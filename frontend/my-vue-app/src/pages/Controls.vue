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

// ------------------- SIMON SAYS GAME -------------------
const gameActive = ref(false)
const sequence = ref([])
const playerSequence = ref([])
const gameStatus = ref('')

const colors = ['blue', 'red', 'green', 'yellow']

const colorMap = {
  blue: { r: 0, g: 0, b: 100 },
  red: { r: 100, g: 0, b: 0 },
  green: { r: 0, g: 100, b: 0 },
  yellow: { r: 100, g: 65, b: 0 } // Not official RGB for yellow but looks more like it
}

async function flashColor(colorName) {
  const colorValue = colorMap[colorName]
  await axios.post(`${PI_SERVER}/led`, { state: 'on', color: colorValue })
  await new Promise(resolve => setTimeout(resolve, 500))
  await axios.post(`${PI_SERVER}/led`, { state: 'off' })
  await new Promise(resolve => setTimeout(resolve, 300))
}

async function startGame() {
  gameActive.value = true
  sequence.value = []
  playerSequence.value = []
  gameStatus.value = 'Watch the sequence...'
  
  // Generate random colors
  for (let i = 0; i < 4; i++) { // set amount of colors
    sequence.value.push(colors[Math.floor(Math.random() * colors.length)]) // Random math number + floor it = random int
  }
  
  // Show sequence
  await new Promise(resolve => setTimeout(resolve, 1000))
  for (const colorName of sequence.value) {
    await flashColor(colorName)
  }
  gameStatus.value = 'Your turn! Press the buttons in order.'
}

// Detect button press (rising edge)
watch(buttonState, (newState, oldState) => {
  if (!gameActive.value) return
  
  // Check each button for a press (transition from false to true)
  for (const colorName of colors) {
    if (newState[colorName] && !oldState[colorName]) {
      playerSequence.value.push(colorName)
      
      // Check if correct so far
      const index = playerSequence.value.length - 1
      if (playerSequence.value[index] !== sequence.value[index]) {
        gameStatus.value = '❌ Wrong! Try again.'
        gameActive.value = false
        return
      }
      
      // Check if complete
      if (playerSequence.value.length === sequence.value.length) {
        gameStatus.value = '✅ You got it!'
        gameActive.value = false
      }
    }
  }
}, { deep: true })

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

    <!-- Right Column: Pi Button Status & Simon Says -->
    <div class="button-status">
      <h2>Pi Button States</h2>
      <div :style="{ color: buttonState.blue ? 'blue' : 'gray' }">Blue Button: {{ buttonState.blue ? 'Pressed' : 'Released' }}</div>
      <div :style="{ color: buttonState.green ? 'green' : 'gray' }">Green Button: {{ buttonState.green ? 'Pressed' : 'Released' }}</div>
      <div :style="{ color: buttonState.red ? 'red' : 'gray' }">Red Button: {{ buttonState.red ? 'Pressed' : 'Released' }}</div>
      <div :style="{ color: buttonState.yellow ? 'goldenrod' : 'gray' }">Yellow Button: {{ buttonState.yellow ? 'Pressed' : 'Released' }}</div>
      
      <hr style="margin: 20px 0">

      <h2 class="centeredtext">Simon Says Game</h2>

      <button @click="startGame" :disabled="gameActive">Start Game</button>
      <p><strong>{{ gameStatus }}</strong></p>
      <p v-if="sequence.length">Sequence length: {{ sequence.length }}</p>
      <p v-if="playerSequence.length">Your progress: {{ playerSequence.length }}/{{ sequence.length }}</p>
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

.button-status button {
  padding: 10px 20px;
  font-size: 16px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
 
  display: block;  
  margin: 0 auto;
  
} 

.button-status button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

h2.centeredtext {
  text-align: center;
}

</style>