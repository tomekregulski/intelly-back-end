const checkTimeframeParams = (req, res, next) => {
  if (Object.keys(req.headers).includes('timeframes')) {
    next();
  } else {
    let err = new Error('You must specify at least one timeframe');
    err.status = 400;
    next(err);
  }
};

module.exports = checkTimeframeParams;
