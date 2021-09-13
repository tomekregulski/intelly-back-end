const seedWholeFoodsData = require('./wholeFoodsSeeds');
const wholeFoodsWeeklyArchiveSeeds = require('./wholeFoodsWeeklyArchiveSeeds.json');
const { WholeFoodsWeeklyArchive } = require('../models');

const sequelize = require('../config/connection');

const seedWholeFoodsWeeklyArchive = () =>
  WholeFoodsWeeklyArchive.bulkCreate(wholeFoodsWeeklyArchiveSeeds);

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedWholeFoodsData();
  console.log('\n----- WHOLE FOODS DATA SEEDED -----\n');

  await seedWholeFoodsWeeklyArchive();
  console.log('\n----- WHOLE FOODS WEEKLY ARCHIVE SEEDED -----\n');

  process.exit(0);
};

seedAll();
