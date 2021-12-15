const requireAuth = (req, res, next) => {
  if (Object.keys(req.headers).includes('roles')) {
    next();
  } else {
    let err = new Error('You must log in to continue');
    err.status = 400;
    next(err);
  }
};

module.exports = requireAuth;
