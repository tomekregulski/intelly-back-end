const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  res.send('hello');
  // try {
  //   const allUsers = await User.findAll();
  //   const userData = allUsers.map((user) => user.get({ plain: true }));
  //   res.status(200).send(userData);
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
});

module.exports = router;
