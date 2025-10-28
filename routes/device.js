// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// -------------------------
// [GET] Devices 
// return array of device
// -------------------------
router.get('/', async (req, res) => { // async = db enabled
  const device = await prisma.device.findMany();
  res.json(device);
})

// -------------------------
// [POST] Devices 
// return id (id kan ook null zijn, niet gelukt )
// -------------------------
router.post('/', async (req, res) => {
  const deviceName = req.body.name;

  const checkDeviceExists = await prisma.device.findMany({
    where: {
      name: deviceName
    }
  })

  if (checkDeviceExists.length > 0) {
    res.json({
      "status": "device already in database"
    })
  } else {

  const newDevice = await prisma.device.create({
  
    data: { 
      name: deviceName
    }
  })
    }
    res.json(newDevice);
})

// -------------------------
// [DELETE] Devices 
// return boolean (true or false )
// -------------------------
router.delete('/:id', (req, res) => {
  // @todo: link to database
  res.send("Deleted device");
})

// -------------------------
// [PUT] Devices 
// return boolean (true or false )
// -------------------------
router.put('/:id', (req, res) => {
  // @todo: link to database
  // req.body -> om data uit een put te halen
  res.send("Updated device");
})

module.exports = router;
