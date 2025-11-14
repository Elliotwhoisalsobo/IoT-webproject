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
  res.send("Deleted led activity");
  res.send(deletedLed);
})

module.exports = router;
