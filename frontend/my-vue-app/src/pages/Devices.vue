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

    // Data (ref) for adding new devices
    let devices = ref([]);
    let newDeviceName = ref("");
    let newDevicePurpose = ref("");
    let newDeviceIP = ref("");
    
    // DEBUGGING

    // fetch("http://localhost:3000/device")
    // .then(res => res.text())
    // .then(t => console.log("RAW RESPONSE:", t));

    // fetch("http://localhost:3000/device")
    // .then(res => res.json())
    // .then(data => {
    //     console.log("Devices from fetch:", data);
    //     devices.value = data;
    // })
    // .catch(err => console.error("Fetch error:", err));

    // ------ Methods ------

    const getDevices = () => {
        fetch("http://localhost:3000/device")
            .then((res) => res.json())
            .then((data) => {
                devices.value = data
            });
    }
    const removeDevice = (id) => {
        fetch("http://localhost:3000/device/" + id, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => { // Maybe remove?
                getDevices();
            });
    }
    
    const addDevice = () => {
        if (!newDeviceName.value || !newDevicePurpose.value) {
            alert("Device name and purpose are required!");
            return; // Stop the function here
        }

        fetch("http://localhost:3000/device/", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                device_name: newDeviceName.value,
                device_purpose: newDevicePurpose.value,
                device_ip: newDeviceIP.value || null,
                status: null
            })
        })
        .then(res => res.json())
        .then(() => {
            // Clear the form
            newDeviceName.value = "";
            newDevicePurpose.value = "";
            newDeviceIP.value = "";
            getDevices();
        })
        .catch(err => console.error(err));
    };


</script>

<!--
    Template
-->
<template>
    <h1>
        Devices
    </h1>

    <ul v-if="devices.length > 0">
        <li v-for="device in devices" :key="device.deviceid">
            {{ device.device_name }}&nbsp;
            |
            {{ device.device_purpose}}&nbsp;
            |
            {{ device.device_ip }}&nbsp; <!-- put if id is not null then | otherwise '' (no |)-->
            |
            {{ device.status }}

            <button @click="removeDevice(device.deviceid)">
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
    <input type="text" v-model="newDeviceName"/> <br></br>
    <label>
        Purpose
    </label>
    <input type="text" v-model="newDevicePurpose"/>
    <br></br>
    <label>
        IP (optional)
    </label>
    <input type="text" v-model="newDeviceIP"/>
    <br></br>
    <button @click="addDevice()">
        Add new device
    </button>
</template>