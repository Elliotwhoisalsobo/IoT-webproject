// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma'); // prisma can run raw sql
const prisma = new PrismaClient();
// -------------------------
// [GET] temp_hum activity 
// return array of temp_hum activity
// -------------------------
router.get('/', async (req, res) => {
  const temp_hum = await prisma.temperature_humidity.findMany({
    include: {
      sensors: true // INNER JOIN
      // perhaps add more here, or is this only for joins?
    }
  });
  res.json(temp_hum);
})

// -------------------------
// [POST] temp_hum activity 
// return id (id kan ook null zijn, niet gelukt )
// -------------------------
router.post('/', async (req, res) => { 
    const sensorid = req.body.sensorid;
    const temperature = req.body.temperature;

    const temp = await prisma.temp_humidity.create({
      data: {
        sensorid: sensorid,
        temperature: temperature,
        humidity: humidity
      }
    })
    res.send(temp);

    console.log(sensorid);
    console.log(temperature);
    console.log(humidity);
})


// -------------------------
// [PUT] temp_hum activity 
// return boolean (true or false )
// -------------------------
router.put('/:id', async (req, res) => {

    const updatedTemperature = await prisma.temperature_humidity.update({
      where: {temperature_humidityid: + req.params.id},
      data: req.body
    });
    res.json(updatedTemperature);

});

// -------------------------
// [DELETE] temp_hum activity  
// return boolean (true or false )
// SOFT DELETION !!!
// -------------------------
router.delete('/:id', async (req, res) => {

    const id = parseInt(req.params.id);
    // Update "isdeleted" with current timestamp instead of deleting
    await prisma.$executeRawUnsafe(
      `UPDATE temperature_humidity SET isdeleted = CURRENT_TIMESTAMP WHERE temperature_humidityid = ${id}`
    );
    res.json({ success: true, message: `Record ${id} timestamped & marked as deleted` });
});





// router.delete('/:id', async (req, res) => {
//   const temperature_humidityid = req.body.temp_humidity;

//   const deleted_temperature = await prisma.temp_humidity.delete({
//     where: {
//       temperature_humidityid: parseInt(temperature_humidityid)
      
//     }
//   })
//   res.send(deleted_temperature);
// })

module.exports = router;
