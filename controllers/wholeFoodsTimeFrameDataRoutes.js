const router = require('express').Router();
const { Op, QueryTypes } = require('sequelize');
const { WholeFoodsTimeframeData } = require('../models');

router.get('/', async (req, res) => {
  try {
    const allWholeFoodsTimeframeData = await WholeFoodsTimeframeData.findAll({
      where: {
        brand: req.headers.brand,
        timeframe: {
          [Op.like]: `${req.headers.timeframe}%`,
        },
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

router.get('/timeframes', async (req, res) => {
  try {
    const allWholeFoodsTimeframeData =
      await WholeFoodsTimeframeData.sequelize.query(
        `SELECT DISTINCT timeframe FROM wholeFoodsTimeframeData WHERE brand LIKE :brand_name AND LENGTH(timeframe) < 9 ORDER BY timeframe DESC LIMIT 4`,
        {
          replacements: { brand_name: req.headers.brand },
          type: QueryTypes.SELECT,
        }
      );

    res.status(200).json(allWholeFoodsTimeframeData);
  } catch (err) {
    console.log(err);

    res.status(500).json(err);
  }
});

router.get('/weekly', async (req, res) => {
  let temp = req.headers.timeframes.split(',');
  try {
    const allWholeFoodsTimeframeData = await WholeFoodsTimeframeData.findAll({
      where: {
        brand: req.headers.brand,
        timeframe: {
          [Op.or]: temp,
        },
      },
      order: [['timeframe', 'DESC']],
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

// router.get('/timeframes', async (req, res) => {
//   console.log(req.headers.brand);
//   try {
//     const allWholeFoodsTimeframeData =
//       await WholeFoodsTimeframeData.sequelize.query(
//         'SELECT * FROM wholeFoodsTimeframeData WHERE timeframe LIKE ("20210427%") AND brand LIKE ("SIMMER")'
//       );
//     // const wholeFoodsTimeframeData = allWholeFoodsTimeframeData.map((item) =>
//     //   item.get({ plain: true })
//     // );
//     console.log(allWholeFoodsTimeframeData);
//     res.status(200).json(allWholeFoodsTimeframeData);
//   } catch (err) {
//     console.log(err);

//     res.status(500).json(err);
//   }
// });

module.exports = router;
