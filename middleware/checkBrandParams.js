const checkBrandParams = (req, res, next) => {
  if (Object.keys(req.headers).includes('brand')) {
    next();
  } else {
    let err = new Error('You must specify a brand');
    err.status = 400;
    next(err);
  }
};

module.exports = checkBrandParams;
