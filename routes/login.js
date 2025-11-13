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
router.get('/', async (req, res) => {
  const login = await prisma.login.findMany();
  res.json(login)
})
  
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

// Deletion will not be implemented since we work with static (unchanging) users/passwords


module.exports = router;
