// import from node_modules
const express = require('express')
const cors = require("cors");
const app = express()



app.use(cors());
//app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // my app may send and receive json data !!!

// Endpoints 
const deviceRouter = require('./routes/device');
const temp_humidityRouter = require('./routes/temp_humidity');
const loginRouter = require('./routes/login');
const ledRouter = require('./routes/led');
const sensorRouter = require('./routes/sensor'); // error module not found


app.use('/device', deviceRouter);
app.use('/temp_humidity', temp_humidityRouter);
app.use('/login', loginRouter);
app.use('/led', ledRouter);
app.use('/sensor', sensorRouter);

console.log("API IS UP AND RUNNING!!!")

app.listen(3000, '0.0.0.0') // Laptop IP at dorm --> 10.10.0.188

 // RASPBERRY PI
app.post("/api/pi-data", (req, res) => {
    console.log("Data from Pi:", req.body);
    res.status(200).json({ message: "received" });
});