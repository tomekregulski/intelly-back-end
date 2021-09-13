const seedWholeFoodsData = require('./wholeFoodsSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedWholeFoodsData();
  console.log('\n----- WHOLE FOODS DATA SEEDED -----\n');

  process.exit(0);
};

seedAll();
