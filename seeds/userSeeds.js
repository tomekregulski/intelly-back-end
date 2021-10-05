const { User } = require('../models');

const UserData = [
  {
    email: 'sam@simplyserved.com',
    password: 'password',
    first_name: 'Sam',
    last_name: 'Miller',
    role: 'admin, client',
    brands: 'SIMMER, SaSo',
  },
  {
    email: 'guest@intelly.test',
    password: 'guest',
    first_name: 'Guest',
    last_name: 'User',
    role: 'demo',
    brands: 'Demo Brand',
  },
  {
    email: 'tomek@intelly.test',
    password: '5itarN44d',
    first_name: 'Tomek',
    last_name: 'Regulski',
    role: 'admin',
    brands: 'Demo Brand, SIMMER, SaSo',
  },
];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;
