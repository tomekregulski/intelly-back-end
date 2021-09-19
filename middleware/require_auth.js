export const requireAuth = (req, res, next) => {
  if (!req.currentUser) {
    throw new error('Not authorized');
  }

  next();
};
