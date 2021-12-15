const checkTimeframeParams = (req, res, next) => {
  if (Object.keys(req.headers).includes('timeframe')) {
    next();
  } else {
    let err = new Error('You must specify a timeframe');
    err.status = 400;
    next(err);
  }
};

module.exports = checkTimeframeParams;
