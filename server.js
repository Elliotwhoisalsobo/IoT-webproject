// import from node_modules
const express = require('express')

// blijkbaar bestaat er een functie express(), 
// ik ga dit toevoegen in de variable app
// en later settings aan toe voegen
const app = express()
app.use(express.json()); // my app may send and receive json data !!!
console.log("API IS UP AND RUNNING!!!")

// Endpoints 
const deviceRouter = require('./routes/device');
const temp_humidityRouter = require('./routes/temperature_humidity');
const loginRouter = require('./routes/login');
const ledRouter = require('./routes/led');
const sensorsRouter = require('./routes/sensor');

app.use('/device', deviceRouter);
app.use('/temp_humidity', temp_humidityRouter);
app.use('/login', loginRouter);
app.use('/leds', ledRouter);
app.use('/sensor', sensorsRouter);

app.listen(3000)