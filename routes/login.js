// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
// -------------------------
// [GET] Ranking 
// return array of ranking
// -------------------------
router.get('/', async (req, res) => {
  // @todo: link to database
  const ranking = await prisma.$queryRaw`
  SELECT 
  s.name songname, a.name artistname, SUM(v.points) sum 
  FROM Votes AS v
	INNER JOIN Songs s USING(song_id)
    INNER JOIN Artists a USING(artist_id)
    GROUP BY
	s.song_id
    ORDER BY 
    SUM(v.points) DESC;`

  res.json(ranking);
})

module.exports = router;
