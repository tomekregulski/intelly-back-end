const router = require('express').Router();
const { WholeFoodsData } = require('../models');

router.get('/', async (req, res) => {
  try {
    const allWholeFoodData = await WholeFoodsData.findAll();
    const wholeFoodsData = allWholeFoodData.map((artist) =>
      artist.get({ plain: true })
    );
    res.status(200).json(wholeFoodsData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
