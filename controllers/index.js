const router = require('express').Router();
const wholeFoodsRoutes = require('./wholeFoodsRoutes');
const wholeFoodsWeeklyArchiveRoutes = require('./wholeFoodsWeeklyArchiveRoutes');
const wholeFoodsTimeframeDataRoutes = require('./wholeFoodsTimeFrameDataRoutes');
const userRoutes = require('./userRoutes');

router.use('/api/whole-foods', wholeFoodsRoutes);
router.use('/api/whole-foods-weekly-archive', wholeFoodsWeeklyArchiveRoutes);
router.use('/api/whole-foods-timeframe-data', wholeFoodsTimeframeDataRoutes);
router.use('/api/users', userRoutes);

module.exports = router;
