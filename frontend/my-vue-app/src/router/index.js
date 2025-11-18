// ------ Import 
import { createRouter, createWebHistory } from 'vue-router';

// ------ Pages 
import Devices from "@/pages/Devices.vue";
//import Sensors from "@/pages/Sensors.vue";
//import Temperature from "@/pages/Temperature.vue";
//import Led from "@/pages/Led_Activity.vue";


// ------ Config of routes 
const routes = [
    {
        path: '/devices',
        name: 'devices',
        component: Devices
    },
    // {
    //     path: '/sensors',
    //     name: 'Sensors',
    //     component: Sensors
    // },
    // {
    //     path: '/temperature',
    //     name: 'temperature',
    //     component: Temperature
    // },
    // {
    //     path: '/led',
    //     name: 'led',
    //     component: Led
    // },
];

// Export to use in main.js
export const router = createRouter({
  history: createWebHistory(),
  routes
})