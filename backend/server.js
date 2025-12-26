// import from node_modules
const express = require('express')
const cors = require("cors");


const app = express()
app.use(cors());
//app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // my app may send and receive json data !!!

// existing routes
const deviceRouter = require('./routes/device');
const temp_humidityRouter = require('./routes/temp_humidity');
const loginRouter = require('./routes/login');
const ledRouter = require('./routes/led');
const sensorRouter = require('./routes/sensor');


app.use('/device', deviceRouter); // IoT devices
app.use('/temp_humidity', temp_humidityRouter); // DHT11
app.use('/login', loginRouter); // Simple user/admin
app.use('/led', ledRouter); // RGB LED
app.use('/sensor', sensorRouter); // IoT sensors

// ---------------- Health check ----------------
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Node backend is online' });
});

console.log("API IS UP AND RUNNING!!!")

app.listen(3000, '0.0.0.0') // Laptop IP at dorm --> 10.10.0.188

 // RASPBERRY PI --> 0.0.0.151
app.post("/api/pi-data", (req, res) => {
    console.log("Data from Pi:", req.body);
    res.status(200).json({ message: "received" });
});