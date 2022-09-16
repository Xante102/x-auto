const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema(
  {
    car: {
      type: mongoose.Schema.ObjectId,
      ref: "Car",
      required: [true, "Review must belong to a car"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a user"],
    },

    pickupLocation: {
      type: String,
      required: [true, "Pick-up location cannot be empty!"],
    },
    pickupDate: {
      type: Date,
      required: [true, "Pick-up date cannot be empty!"],
    },
    pickupTime: {
      type: Date,
      required: [true, "Pick-up time cannot be empty!"],
    },

    dropoffLocation: {
      type: String,
      required: [true, "Drop-off location cannot be empty!"],
    },
    dropoffDate: {
      type: Date,
      required: [true, "Drop-off date cannot be empty!"],
    },
    dropoffTime: {
      type: Date,
      required: [true, "Drop-off time cannot be empty!"],
    },


  },
);

const Rental = mongoose.model("Rental", rentalSchema);

module.exports = Rental;

