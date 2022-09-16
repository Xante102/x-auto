const Favourite = require('./../models/favourite.model');
const factory = require('./handler.factory');

exports.createFavourite = factory.createOne(Favourite);
exports.getFavourite = factory.getOne(Favourite);
exports.getAllFavourites = factory.getAll(Favourite);
exports.updateFavourite = factory.updateOne(Favourite);
exports.deleteFavourite = factory.deleteOne(Favourite);
