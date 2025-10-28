// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma'); // prisma can run raw sql
const prisma = new PrismaClient();
// -------------------------
// [GET] Songs 
// return array of songs
// -------------------------
router.get('/', async (req, res) => {
  const songs = await prisma.songs.findMany({
    include: {
      artists: true // INNER JOIN
    }
  });
  res.json(songs);
})

// -------------------------
// [POST] Songs 
// return id (id kan ook null zijn, niet gelukt )
// -------------------------
router.post('/', async (req, res) => { 
    const artistId = req.body.artist_id;
    const songName = req.body.name;

    // bestaat deze combo al?
    const combinationCheck = await prisma.songs.findMany({
      where: {
        artist_id: artistId,
        name: songName
      }
    })

    if (combinationCheck.length > 0) {
      res.json({
        "status" : "Combination already exists!"
      })
    }

    const newSong = await prisma.songs.create({
      data: {
        artist_id: artistId,
        name: songName
      }
    })
    res.send(newSong);

    console.log(artistId);
    console.log(songName);
})

// -------------------------
// [DELETE] Songs 
// return boolean (true or false )
// -------------------------
router.delete('/:id', async (req, res) => {
  const songId = req.body.song_id;

  const deletedSong = await prisma.songs.delete({
    where: {
      songs_id: songId,
      
    }
  })
  res.send("Deleted Songs");
})

// -------------------------
// [PUT] Songs 
// return boolean (true or false )
// -------------------------
router.put('/:id', (req, res) => {
  // @todo: link to database
  // req.body -> om data uit een put te halen
  res.send("Updated Songs");
})

module.exports = router;
