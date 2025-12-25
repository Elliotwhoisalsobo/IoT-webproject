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
// LOGIN AUTHENTICATION
// -------------------------
router.post('/', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        const user = await prisma.login.findFirst({
            where: {
                username: username,
                password: password
            }
        });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Determine role: admin = 'admin', else 'user'
        const role = user.username === 'admin' ? 'admin' : 'user';

        res.json({ userid: user.userid, username: user.username, role });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});




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
