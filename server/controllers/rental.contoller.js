const Rental = require('../models/rental.model');
const factory = require('./handler.factory');

exports.createRental = factory.createOne(Rental);
exports.getRental = factory.getOne(Rental);
exports.getAllRentals = factory.getAll(Rental);
exports.updateRental = factory.updateOne(Rental);
exports.deleteRental = factory.deleteOne(Rental);




