const router = require('express').Router();
const { Op, QueryTypes } = require('sequelize');
const { WholeFoodsTimeframeData } = require('../models');
const checkBrandParams = require('../middleware/checkBrandParams');
const checkTimeframeParams = require('../middleware/checkTimeframeParams');
const checkMultipleTimeframes = require('../middleware/checkMultipleTimeframes');

const requireAuth = require('../middleware/requireAuth');
const requireServiceAccess = require('../middleware/requireServiceAccess');

router.get(
  '/',
  requireAuth,
  requireServiceAccess,
  checkBrandParams,
  checkTimeframeParams,
  async (req, res) => {
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
      res.status(500).json({ error: String(err) });
    }
  }
);

router.get('/timeframes', checkBrandParams, async (req, res) => {
  try {
    const allWholeFoodsTimeframeData =
      await WholeFoodsTimeframeData.sequelize.query(
        `SELECT DISTINCT timeframe FROM wholeFoodsTimeframeData WHERE brand LIKE :brand_name AND LENGTH(timeframe) < 9 ORDER BY timeframe DESC`,
        {
          replacements: { brand_name: req.headers.brand },
          type: QueryTypes.SELECT,
        }
      );

    res.status(200).json(allWholeFoodsTimeframeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get(
  '/weekly',
  requireAuth,
  requireServiceAccess,
  checkBrandParams,
  checkMultipleTimeframes,
  async (req, res) => {
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
      res.status(500).json(err);
    }
  }
);

router.get(
  '/monthly',
  requireAuth,
  requireServiceAccess,
  checkBrandParams,
  checkMultipleTimeframes,
  async (req, res) => {
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
      res.status(500).json(err);
    }
  }
);

module.exports = router;
