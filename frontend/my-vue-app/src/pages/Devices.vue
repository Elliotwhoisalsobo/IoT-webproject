<!--
    Settings van de pagina
    10.10.0.151
-->
<script setup>
    // Imports
    import { ref, onMounted } from 'vue';

    // Life cycles 
    onMounted(() => {
        getDevices();
        getSensors();
    })

    // Data (ref) for adding new device records
    let devices = ref([]);

    let newDeviceName = ref("");
    let newDevicePurpose = ref("");
    let newDeviceIP = ref("");

    // Data (ref) for editing device records
    let editingDeviceId = ref(""); // not actually used to edit but to select record

    let editDeviceName = ref("");
    let editDevicePurpose = ref("");
    let editDeviceIP = ref("");

    // Data (ref) for adding new sensor records
    let sensors = ref([]);

    let newSensorName = ref("");
    let newDeviceId = ref("");
    let newSensorDescription = ref("");

    // Data (ref) for editing sensor records
    let editingSensorId = ref(null); // Used to select record not actually edited

    let editSensorName = ref("");
    let editSensorDescription = ref("");
    let editDeviceId = ref("");


    

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

    // ------ Devices ------

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

        fetch("http://localhost:3000/device", {
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
        //.catch(err => console.error(err));
    };


    // ------ Edit ------
    const startEditDevice = (device) => {
        editingDeviceId.value = device.deviceid;

        editDeviceName.value = device.device_name;
        editDevicePurpose.value = device.device_purpose;
        editDeviceIP.value = device.device_ip;

        
    };


    const cancelEditDevice = () => {
        editingDeviceId.value = null;
    };

    const updateDevice = () => {
        fetch(`http://localhost:3000/device/${editingDeviceId.value}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                device_name: editDeviceName.value,
                device_purpose: editDevicePurpose.value,
                device_ip: editDeviceIP.value
            })
        })
        .then(() => {
            editingDeviceId.value = null;
            getDevices();
        });
    };


    // ------ Sensors ------

    const getSensors = () => {
        fetch("http://localhost:3000/sensor")
            .then((res) => res.json())
            .then((data) => {
                sensors.value = data
            });
        };
    const addSensor = () => {
        if (!newSensorName.value || !newSensorDescription.value) {
            alert("Sensor name and description are required!");
            return;
        }

        fetch("http://localhost:3000/sensor", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sensor_name: newSensorName.value,
                sensor_description: newSensorDescription.value,
                device_ip: newDeviceIP.value || null,
            })
        })
        .then(res => res.json())
        .then(() => {
            // Clear the form
            newSensorName.value = "";
            newSensorDescription.value = "";
            newDeviceId.value = "";
            getSensors();
        })
        //.catch(err => console.error(err));
    };
    
    const removeSensor = (id) => {
        fetch(`http://localhost:3000/sensor/${id}`, {
            method: "DELETE"
        })
        .then(() => getSensors());
    };


    

    // ------ Edit ------
    const startEditSensor = (sensor) => {
        editingSensorId.value = sensor.sensorid;

        editSensorName.value = sensor.sensor_name;
        editSensorDescription.value = sensor.sensor_description;
        editDeviceId.value = sensor.deviceid;
    };

    const cancelEditSensor = () => {
        editingSensorId.value = null;
    };

    const updateSensor = () => {
        fetch(`http://localhost:3000/sensor/${editingSensorId.value}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                sensor_name: editSensorName.value,
                sensor_description: editSensorDescription.value,
                deviceid: editDeviceId.value
            })
        })
        .then(() => {
            editingSensorId.value = null;
            getSensors();
        });
    };


</script>

<!--
    Template
-->
<template>
  <div class="container">

    <!-- DEVICES -->
    <div class="box">
      <h1>Devices</h1>

      <ul v-if="devices.length">
        <li v-for="d in devices" :key="d.deviceid">


        <!-- view -->
          <div v-if="editingDeviceId !== d.deviceid">
          {{ d.device_name }} | {{ d.device_purpose }} | {{ d.device_ip ?? "no ip" }}
          
          <button @click="startEditDevice(d)">Edit</button>
          <button @click="removeDevice(d.deviceid)">Delete</button>
          </div>


        <!--<p v-else>No devices</p> -->
          <!-- edit -->
        <div v-else>
        <input v-model="editDeviceName" placeholder="Name" />
        <input v-model="editDevicePurpose" placeholder="Description" />
        <input v-model="editDeviceId" placeholder="Device IP (optional)" />

        <button @click="updateDevice">Save</button>
        <button @click="cancelEditDevice">Cancel</button>

        </div>

      </li>
    </ul>

      

      <h2>Add device</h2>

      <input v-model="newDeviceName" placeholder="Name" />
      <input v-model="newDevicePurpose" placeholder="Purpose" />
      <input v-model="newDeviceIP" placeholder="IP (optional)" />

      <button @click="addDevice">Add</button>
    </div>


    <!-- SENSORS -->
    <div class="box">
      <h1>Sensors</h1>

      <ul v-if="sensors.length">
        <li v-for="s in sensors" :key="s.sensorid">

          <!-- view -->
          <div v-if="editingSensorId !== s.sensorid">
            {{ s.sensor_name }} | {{ s.sensor_description }} | Device: {{ s.deviceid ?? "none" }}

            <button @click="startEditSensor(s)">Edit</button>
            <button @click="removeSensor(s.sensorid)">Delete</button>
          </div>

          <!-- edit -->
          <div v-else>
            <input v-model="editSensorName" placeholder="Name" />
            <input v-model="editSensorDescription" placeholder="Description" />
            <input v-model="editDeviceId" placeholder="Device ID" />

            <button @click="updateSensor">Save</button>
            <button @click="cancelEditSensor">Cancel</button>
          </div>

        </li>
      </ul>

      <p v-else>No sensors</p>

      <h2>Add sensor</h2>

      <input v-model="newSensorName" placeholder="Name" />
      <input v-model="newSensorDescription" placeholder="Description" />
      <input v-model="newDeviceId" placeholder="Device ID (optional)" />

      <button @click="addSensor">Add</button>
    </div>

  </div>
</template>


<style scoped>
.container {
  display: flex;
  gap: 2rem;
  padding: 1rem;
}

.box {
  flex: 1;
  border: 1px solid #ccc;
  padding: 1rem;
}

input {
  display: block;
  margin-bottom: 0.5rem;
  width: 100%;
}

button {
  margin-right: 0.5rem;
}
</style>

