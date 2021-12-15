const requireServiceAccess = (req, res, next) => {
  if (Object.keys(req.headers).includes('access')) {
    const access = req.headers.access;
    if (access.split(',').includes('retail-data')) {
      next();
    } else {
      let err = new Error('You do not have access to this service');
      err.status = 400;
      next(err);
    }
  } else {
    let err = new Error('You do not have access to this service');
    err.status = 400;
    next(err);
  }
};

module.exports = requireServiceAccess;
