const checkRole = async (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(401).send({ message: 'Only admin can perform this operation' });
  }
  next();
};

module.exports = checkRole;
