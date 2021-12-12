const app = require('./app');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
});
