const Review = require("./../models/review.model");
const factory = require("./handler.factory");

exports.setCarUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.car) req.body.car = req.params.carId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
