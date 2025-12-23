<script setup>
import axios from 'axios';
import { useWebSocket } from '@vueuse/core'
import { ref, onMounted, onUnmounted, watch } from 'vue'
import RoleBadge from '@/components/RoleBadge.vue';
import { useRouter } from 'vue-router';



// ------------------- LOGOUT -------------------
const router = useRouter();
const logout = () => {
  localStorage.clear();
  router.push('/login');
};

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
// ---------------- Buttons ----------------
const buttonState = ref({
  blue: false,
  red: false,
  green: false,
  yellow: false
})

const { data: buttonData } = useWebSocket('ws://10.10.0.151:5000/ws/buttons', {
  autoReconnect: true
})

watch(buttonData, (msg) => {
  if (!msg) return
  const parsed = JSON.parse(msg)
  buttonState.value = parsed
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


// ------------------- TEMPERATURE & HUMIDITY -------------------


// ---------------- DHT ----------------
const temperature = ref(null)
const humidity = ref(null)
const device = ref('')
const tempLoading = ref(true)
let wsDHT = null

onMounted(() => {
  wsDHT = new WebSocket('ws://10.10.0.151:5000/ws/dht')

  wsDHT.onmessage = (event) => {
    const data = JSON.parse(event.data)
    temperature.value = data.temperature
    humidity.value = data.humidity
    device.value = data.device
    tempLoading.value = false
  }
})

onUnmounted(() => {
  wsDHT?.close()
})



// async function fetchSensorData() {
//   try {
//     const res = await axios.get(`${PI_SERVER}/sensor`)
//     temperature.value = res.data.temperature
//     humidity.value = res.data.humidity
//     device.value = res.data.device
//   } catch (err) {
//     console.error('Failed to fetch sensor data:', err)
//   } finally {
//     tempLoading.value = false
//   }
// }

// onMounted(() => {
//   fetchSensorData()
//   setInterval(fetchSensorData, 5000)
// })

</script>

<template>
  <!-- Role Badge -->
  <div class="page-header">
    <h1></h1> <!-- Creating space for btn's -->
    <!-- Right side -->
    <div class="header-right">
      <RoleBadge />
      <button class="logout-btn" @click="logout">Logout</button>
    </div>
  </div>

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

    <!-- Middle Column: Pi Button Status & Simon Says -->
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

    <!-- Right Column: Temperature & Humidity -->
    <div class="temp-humidity">
      <h2 class="centeredtext">Temperature & Humidity</h2>
      <div v-if="tempLoading">Loading sensor data...</div>
      <div v-else class="sensor-data">
        <p>🌡 Temperature: <strong>{{ temperature }} °C</strong></p>
        <p>💧 Humidity: <strong>{{ humidity }} %</strong></p>
        <p>📟 Device: <strong>{{ device }}</strong></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  justify-content: space-between;
  max-width: 1200px; /* a bit wider for three columns */
  margin: 20px auto;
  font-family: sans-serif;
}

.led-control, .button-status, .temp-humidity {
  width: 30%; /* three equal columns */
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

/* LED Control styles */
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

/* Button Status & Simon Says styles */
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

/* Centered text */
h2.centeredtext {
  text-align: center;
}

/* Sensor Data styles */
.sensor-data {
  text-align: center;
}
.sensor-data p {
  margin: 6px 0;
}

/* Page header */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 16px;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logout-btn {
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  background-color: #444;
  color: white;
}
.logout-btn:hover {
  background-color: #222;
}

.led-control, .button-status, .temp-humidity {
  width: 30%; /* three equal columns */
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;

  /* Add flex centering */
  display: flex;
  flex-direction: column;
  justify-content: center; /* vertical centering */
  align-items: center;     /* horizontal centering */
  text-align: center;      /* ensures inline text is centered */
}


</style>
