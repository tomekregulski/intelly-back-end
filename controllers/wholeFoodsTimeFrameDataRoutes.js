const router = require('express').Router();
const { WholeFoodsTimeframeData } = require('../models');

router.get('/', async (req, res) => {
  console.log(req.headers.brand);
  try {
    const allWholeFoodsTimeframeData = await WholeFoodsTimeframeData.findAll({
      where: {
        brand: req.headers.brand,
      },
    });
    const wholeFoodsTimeframeData = allWholeFoodsTimeframeData.map((item) =>
      item.get({ plain: true })
    );
    res.status(200).json(wholeFoodsTimeframeData);
  } catch (err) {
    console.log(err);

    res.status(500).json(err);
  }
});

module.exports = router;
