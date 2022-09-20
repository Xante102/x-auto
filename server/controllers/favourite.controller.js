const Favourite = require('./../models/favourite.model');
const factory = require('./handler.factory');

exports.setCarUserIds = (req, res, next) => {
  // Allow nested routes
  if (req.body.car) req.body.car = req.params.carId;
  if (req.body.user) req.body.user = req.user.id;
};

exports.createFavourite = factory.createOne(Favourite);
exports.getFavourite = factory.getOne(Favourite);
exports.getAllFavourites = factory.getAll(Favourite);
exports.updateFavourite = factory.updateOne(Favourite);
exports.deleteFavourite = factory.deleteOne(Favourite);
