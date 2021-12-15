const { WholeFoodsTimeframeData } = require('../models');
const wfmTimeframeSeed = require('./wholeFoodsTimeframeDataPartTwo.json');

const sequelize = require('../config/connection');

const seedWholeFoodsTimeframeData = () =>
  WholeFoodsTimeframeData.bulkCreate(wfmTimeframeSeed);

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedWholeFoodsTimeframeData();
  console.log('\n----- WHOLE FOODS TIMEFRAME DATA SEEDED -----\n');

  process.exit(0);
};

seedAll();
