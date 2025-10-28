// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();


const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// -------------------------
// [GET] Votes 
// return id (id kan ook null zijn, niet gelukt )
// -------------------------
router.get('/', async (req, res) => {
    const votes = await prisma.votes.findMany();
    res.json(votes);

    //return votes
})

// -------------------------
// [POST] Votes 
// return id (id kan ook null zijn, niet gelukt )
// -------------------------
router.post('/', async (req, res) => {
    // @todo: link to database
    // req.body -> om data uit een post te halen
    //const voterid = req.body.voter_id;
    const song_id = req.body.song_id;
    const points = req.body.points;
    // integers = parse later
    //res.send("Added vote");

    const newVote = await prisma.votes.create({
        data: {
           // voter_id: voterid,
            song_id: song_id,
            points
        }
    })
    res.json(newVote)
    res.send(newVote)
    //console.log(voter_id);
    console.log(song_id);
    console.log(points);

})



// model votes {
//   vote_id  Int     @id @default(autoincrement())
//   voter_id Int?
//   song_id  Int?
//   points   Int?
//   voters   voters? @relation(fields: [voter_id], references: [voter_id], onDelete: NoAction, onUpdate: NoAction, map: "votes_ibfk_1")
//   songs    songs?  @relation(fields: [song_id], references: [song_id], onDelete: NoAction, onUpdate: NoAction, map: "votes_ibfk_2")

// prisma.votes.create
// return new vote

// req.body -> om data uit post te halen
//res.send()

module.exports = router;
