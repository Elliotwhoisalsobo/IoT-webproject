<!--
    Settings van de pagina
-->
<script setup>
    // Imports
    import { ref, onMounted } from 'vue';

    // Life cycles 
    onMounted(() => {
        getDevices();
    })
    // Data (ref)
    let devices = ref([]);
    let newDeviceName = ref("");

    // Methods 
    const getDevices = () => {
        fetch("http://localhost:3000/devices")
            .then((res) => res.json())
            .then((data) => {
                devices.value = data
            });
    }
    const removeDevice = (id) => {
        fetch("http://localhost:3000/devices/" + id, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {
                getDevices();
            });
    }

    const addDevice = () => {
        fetch("http://localhost:3000/devices/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newDeviceName.value
            })
        })
            .then((res) => res.json())
            .then((data) => {
                getDevices();
            });
    }
</script>

<!--
    Template
-->
<template>
    <h1>
        Artists
    </h1>

    <ul v-if="devices.length > 0">
        <li v-for="device in devices" :key="device.device_id">
            {{ device.name }}&nbsp;

            <button @click="removeDevice(device.device_id)">
                Delete 
            </button>
        </li>
    </ul>

    <p v-if="devices.length == 0">
        Geen devices beschikbaar
    </p>

    <hr/>

    <h2>
        Create new device
    </h2>

    <label>
        Name
    </label>
    <input type="text" v-model="newDeviceName"/>
    <button @click="addDevice()">
        Add new device
    </button>
</template>