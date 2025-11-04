// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();


const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// -------------------------
// [GET] Sensors 
// return id (id kan ook null zijn, niet gelukt )
// -------------------------
router.get('/', async (req, res) => {
    const sensors = await prisma.sensors.findMany({
        include: {
            device: true
        }
    });
    res.json(sensors);
})

// -------------------------
// [POST] Sensors 
// return id (id kan ook null zijn, niet gelukt )
// -------------------------
router.post('/', async (req, res) => {
    // @todo: link to database
    // req.body -> om data uit een post te halen
    //const voterid = req.body.voter_id;
    const deviceid = req.body.deviceid;
    const sensor_name = req.body.sensor_name;
    const sensor_description = req.body.sensor_description;
    // integers = parse later
    //res.send("Added vote");

    const newSensor = await prisma.sensors.create({
        data: {
           // voter_id: voterid,
            deviceid: deviceid,
            sensor_name: sensor_name,
            sensor_description: sensor_description
        }
    })
    res.json(newSensor)
    res.send(newSensor)
    //console.log(voter_id);
    console.log(sensor_name);
    console.log(sensor_description);

})

// -----------------------
// [DELETE] Sensors
// just input id
// ----------------------

// WORKS --> http://localhost:3000/sensor/2
router.delete('/:id', async (req, res) => {
    const sensorid = req.params.id;

    const deletedSensor = await prisma.sensors.delete({
    where: {
        sensorid: parseInt(sensorid)
      }
    })
    res.send(deletedSensor);
})


// router.delete('/:id', async (req, res) => {
//   const songId = req.params.id;

//   const deletedSong = await prisma.songs.delete({
//     where: {
//       song_id: parseInt(songId)
//     }
//   });

//   res.send(deletedSong);
// })



module.exports = router;
