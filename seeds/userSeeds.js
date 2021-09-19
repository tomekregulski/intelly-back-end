const { User } = require('../models');

const UserData = [
  {
    email: 'sam@simplyserved.com',
    password: 'admin',
    first_name: 'Sam',
    last_name: 'Miller',
    role: 'admin, client',
    brands: 'SIMMER, SaSo',
  },
];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;
