const requireServiceAccess = (req, res, next) => {
  console.log('before if');
  console.log(req.headers.access);
  if (Object.keys(req.headers).includes('access')) {
    console.log('after if');
    console.log(req.headers.access);
    const access = req.headers.access;
    if (access.split(',').includes('retail-data')) {
      next();
    } else {
      console.log('nested else');
      let err = new Error('You do not have access to this service');
      err.status = 400;
      next(err);
    }
  } else {
    console.log('outer else');
    let err = new Error('You do not have access to this service');
    err.status = 400;
    next(err);
  }
};

module.exports = requireServiceAccess;
