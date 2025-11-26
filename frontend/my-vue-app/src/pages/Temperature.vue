<template>
  <div class="temperature-page">
    <h1>Temperature & Humidity</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <p>Temperature: {{ temperature }} °C</p>
      <p>Humidity: {{ humidity }} %</p>
      <p>Device: {{ device }}</p>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";


const temperature = ref(null);
const humidity = ref(null);
const device = ref("");
const loading = ref(true);

async function fetchSensorData() {
  try {
    const res = await axios.get("http://10.10.0.151:5000/sensor"); 
    temperature.value = res.data.temperature;
    humidity.value = res.data.humidity;
    device.value = res.data.device;
  } catch (err) {
    console.error("Failed to fetch sensor data:", err);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchSensorData();

  // Optional: auto-refresh every 5 seconds
  setInterval(fetchSensorData, 5000);
});
</script>

<style scoped>
.temperature-page {
  padding: 1rem;
}
</style>
