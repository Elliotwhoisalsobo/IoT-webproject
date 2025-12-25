// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma'); // prisma can run raw sql
const prisma = new PrismaClient();



// RASPI PI STUFF
// RGB LED
const axios = require("axios"); // Look this up later

router.post("/led", async (req, res) => {
    const { state } = req.body;
    try {
        await axios.post("http://10.10.0.151:5000/led", { state }); // Pi IP
        res.json({ ok: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// BUTTONS
// Example: GET button states from Raspberry Pi
router.get('/button', async (req, res) => {
  try {
    const response = await axios.get('http://10.10.0.151:5000/buttons'); // new Flask endpoint
    res.json(response.data); // { blue: true/false, red: true/false, ... }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

// -------------------------
// [GET] led activity 
// return array of led activity
// -------------------------
router.get('/', async (req, res) => {
  const led = await prisma.led_activity.findMany({
    where: {
      isdeleted: null,
    },
    include: {
      sensors: true // INNER JOIN
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
    const activated = req.body.activated;

    const newLed = await prisma.led_activity.create({
      data: {
        sensorid: sensorid,
        activated: activated
      }
    })
    res.send(newLed);

    console.log(sensorid);
    console.log(activated);
})


// -------------------------
// [PUT] led activity 
// return boolean (true or false )
// -------------------------
router.put('/:id', (req, res) => {
  // @todo: link to database
  // req.body -> om data uit een put te halen
  res.send("Updated led activity");
})

// -------------------------
// [DELETE] led activity 
// return boolean (true or false )
// -------------------------
router.delete('/:id', async (req, res) => {
  const ledid = req.body.led_activityid;

  const deletedLed = await prisma.led_activity.delete({
    where: {
      led_activityid: ledid,
      
    }
  })
  //res.send("Deleted led activity");
  res.send(deletedLed);
})

module.exports = router;
