// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
// -------------------------
// [GET] Login
// return array of login (users)
// -------------------------
// COMPLETE THIS ROUTE
router.get('/', async (req, res) => {
  const login = await prisma.login.findMany();
  res.json(login)
})
  

// router.get('/', async (req, res) => {
//   // @todo: link to database
//   const ranking = await prisma.$queryRaw`
//   SELECT 
//   s.name songname, a.name artistname, SUM(v.points) sum 
//   FROM Votes AS v
// 	INNER JOIN Songs s USING(song_id)
//     INNER JOIN Artists a USING(artist_id)
//     GROUP BY
// 	s.song_id
//     ORDER BY 
//     SUM(v.points) DESC;`

//   res.json(ranking);
// })

// -------------------------
// [POST] Login
// return id (id kan ook null zijn, niet gelukt )
// -------------------------
router.post('/', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = await prisma.login.create({ // ERROR
    data: {
      username: username,
      password: password
    }
  })
  res.send(newUser);

  console.log(username);
  console.log(password);
})



// -------------------------
// [PUT] Login 
// return boolean (true or false )
// -------------------------
router.put('/:userid', async (req, res) => {
  try {
    const updatedUser = await prisma.login.update({
      where: { userid: +req.params.userid }, // + converts string → number
      data: req.body
    });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});



// -------------------------
// [DELETE] Login 
// return boolean (true or false )
// -------------------------



module.exports = router;
