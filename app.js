const express = require('express');
const path = require('path');
const cors = require('cors');

const errorHandler = require('./handlers/error');
const routes = require('./controllers');

const app = express();
app.set('trust proxy', true);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

module.exports = app;
