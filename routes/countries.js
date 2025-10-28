// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();

// -------------------------
// [GET] Countries 
// return array of countries
// -------------------------
router.get('/', (req, res) => {
  // @todo: link to database
  res.json([]);
})

module.exports = router;
