// ------ Import 
import { createRouter, createWebHistory } from 'vue-router';

// ------ Pages 
import Device from "@/pages/Devices.vue";
import Login from "@/pages/Login.vue";
import Control from "@/pages/Controls.vue";
//import Sensors from "@/pages/Sensors.vue";
import Temperature from "@/pages/Temperature.vue"; // will be deleted soon



// ------ Config of routes 
const routes = [
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
    path: '/',
    redirect: '/login'
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
    //  {
    //      path: '/temperature',
    //      name: 'temperature',
    //      component: Temperature
    //  },
    {
        path: '/control',
        name: 'control',
        component: Control
    },
];

// Export to use in main.js
export const router = createRouter({
  history: createWebHistory(),
  routes
})

// ------------------------
// Navigation guard <-- once logged out can no longer manually go to user/admin pages
// ------------------------
router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('role');

  // If going to login, allow
  if (to.path === '/login') {
    next();
    return;
  }

  // Not logged in → redirect to login
  if (!role) {
    next('/login');
    return;
  }

  // User trying to access admin page → block
  if (to.path === '/device' && role !== 'admin') {
    next('/control'); // redirect normal users to their page
    return;
  }

  // Logged-in user going to allowed page → allow
  next();
});