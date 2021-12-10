const router = require('express').Router();
const wholeFoodsTimeframeDataRoutes = require('./wholeFoodsTimeFrameDataRoutes');

router.use('/api/whole-foods-timeframe-data', wholeFoodsTimeframeDataRoutes);

module.exports = router;
