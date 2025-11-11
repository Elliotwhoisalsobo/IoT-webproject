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
    const { device_name, device_purpose, device_ip, status } = req.body;

    const device = await prisma.device.create({
        data: {
            device_name,
            device_purpose,
            device_ip,
            status
        }
    });

    console.log(device_name, device_purpose, device_ip, status);
    res.send(device);
});




// -------------------------
// [PUT] Devices 
// return boolean (true or false )
// -------------------------
// router.put('/:id', (req, res) => {
//   // @todo: link to database
//   // req.body -> om data uit een put te halen
//   res.send("Updated device");
// })

router.put('/:id', async (req, res) => {

    const updatedDevice = await prisma.device.update({
      where: {deviceid: + req.params.id},
      data: req.body
    });
    res.json(updatedDevice);

});

// -------------------------
// [DELETE] Devices 
// return boolean (true or false )
// -------------------------
// SOFT DELETION
router.delete('/:id', async (req, res) => {

    const id = parseInt(req.params.id);
    // Update "isdeleted" with current timestamp instead of deleting
    await prisma.$executeRawUnsafe(
      `UPDATE device SET isdeleted = CURRENT_TIMESTAMP WHERE deviceid = ${id}`
    );
    res.json({ success: true, message: `Record ${id} timestamped & marked as deleted` });
});


// HARD DELETION
// router.delete('/:id', (req, res) => {
//   // @todo: link to database
//   res.send("Deleted device");
// })

module.exports = router;
