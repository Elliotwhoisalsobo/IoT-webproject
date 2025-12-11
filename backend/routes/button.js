// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();

// RASPI PI STUFF

// BUTTONS
// Example: GET button states from Raspberry Pi
router.get('/button', async (req, res) => {
  try {
    const response = await axios.get('http://10.10.0.151:5000/buttons'); // new Flask endpoint
    res.json(response.data); // { blue: true/false, red: true/false, ... }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
