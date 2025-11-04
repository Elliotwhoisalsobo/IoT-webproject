// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma'); // prisma can run raw sql
const prisma = new PrismaClient();
// -------------------------
// [GET] led activity 
// return array of led activity
// -------------------------
router.get('/', async (req, res) => {
  const led = await prisma.temp_humidity.findMany({
    include: {
      sensors: true // INNER JOIN
      // perhaps add more here, or is this only for joins?
    }
  });
  res.json(led);
})

// -------------------------
// [POST] led activity 
// return id (id kan ook null zijn, niet gelukt )
// -------------------------
router.post('/', async (req, res) => { 
    const sensorid = req.body.sensorid;
    const temperature__C__ = req.body.temperature__C__;

    const newLed = await prisma.temp_humidity.create({
      data: {
        sensorid: sensorid,
        temperature: temperature__C__,
        humidity: humidity
      }
    })
    res.send(newLed);

    console.log(sensorid);
    console.log(temperature__C__);
    console.log(humidity);
})


// -------------------------
// [PUT] led activity 
// return boolean (true or false )
// -------------------------
router.put('/:id', (req, res) => {
  // @todo: link to database
  // req.body -> om data uit een put te halen
  res.send("Updated DHT data");
})

// -------------------------
// [DELETE] led activity 
// return boolean (true or false )
// -------------------------
router.delete('/:id', async (req, res) => {
  const ledid = req.body.temp_humidity;

  const deleted_temperature = await prisma.temp_humidity.delete({
    where: {
      temp_humidity: temp_humidity
      
    }
  })
  res.send("Deleted DHT data");
})

module.exports = router;
