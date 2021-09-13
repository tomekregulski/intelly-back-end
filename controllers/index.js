const router = require('express').Router();
const wholeFoodsRoutes = require('./wholeFoodsRoutes');
// const userRoutes = require('./userRoutes');

router.use('/api/whole-foods', wholeFoodsRoutes);
// router.use('/api/users', userRoutes);

module.exports = router;
