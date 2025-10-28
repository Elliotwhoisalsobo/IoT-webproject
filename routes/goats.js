const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
  res.json(goats);
})

router.get('/:id', (req, res) => {
  let selectedGoat = null;
  goats.forEach((goat) => {
    if (goat.id == req.params.id) {
      selectedGoat = goat;
    }
  });
  res.json(selectedGoat);
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.send("Added goat");
})

router.delete('/:id', (req, res) => {
  res.send("Deleted goat");
})

module.exports = router;
