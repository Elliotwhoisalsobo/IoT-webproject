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
const countriesRouter = require('./routes/countries');
const goatsRouter = require('./routes/goats');
const rankingRouter = require('./routes/ranking');
const ledRouter = require('./routes/led');
const votesRouter = require('./routes/votes');

app.use('/device', deviceRouter);
app.use('/countries', countriesRouter);
app.use('/goats', goatsRouter);
app.use('/ranking', rankingRouter);
app.use('/leds', ledRouter);
app.use('/votes', votesRouter);

app.listen(3000)