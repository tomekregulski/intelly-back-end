const router = require('express').Router();
const { WholeFoodsWeeklyArchive } = require('../models');

router.get('/', async (req, res) => {
  try {
    const allWholeFoodWeeklyArchiveData =
      await WholeFoodsWeeklyArchive.findAll();
    const wholeFoodWeeklyArchiveData = allWholeFoodWeeklyArchiveData.map(
      (item) => item.get({ plain: true })
    );
    res.status(200).json(wholeFoodWeeklyArchiveData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
