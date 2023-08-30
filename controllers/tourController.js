//create a checkbody middleware
exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: ',issing name or price',
    });
  }
  next();
};
