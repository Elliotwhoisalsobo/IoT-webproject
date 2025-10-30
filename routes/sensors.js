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
    const sensors = await prisma.sensors.findMany();
    res.json(sensors);

    //return sensors
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



// model sensors {
//   vote_id  Int     @id @default(autoincrement())
//   voter_id Int?
//   song_id  Int?
//   points   Int?
//   voters   voters? @relation(fields: [voter_id], references: [voter_id], onDelete: NoAction, onUpdate: NoAction, map: "votes_ibfk_1")
//   songs    songs?  @relation(fields: [song_id], references: [song_id], onDelete: NoAction, onUpdate: NoAction, map: "votes_ibfk_2")

// prisma.sensors.create
// return new vote

// req.body -> om data uit post te halen
//res.send()

module.exports = router;
