// ------ Import 
import { createRouter, createWebHistory } from 'vue-router';

// ------ Pages 
import Device from "@/pages/Devices.vue";
import Login from "@/pages/Login.vue";
import Led from "@/pages/Led.vue";
//import Sensors from "@/pages/Sensors.vue";
import Temperature from "@/pages/Temperature.vue";



// ------ Config of routes 
const routes = [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  
    {
        path: '/device',
        name: 'device',
        component: Device
    },
    // {
    //     path: '/sensors',
    //     name: 'Sensors',
    //     component: Sensors
    // },
     {
         path: '/temperature',
         name: 'temperature',
         component: Temperature
     },
    {
        path: '/led',
        name: 'led',
        component: Led
    },
];

// Export to use in main.js
export const router = createRouter({
  history: createWebHistory(),
  routes
})