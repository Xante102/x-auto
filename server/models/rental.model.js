	status

const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema(
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

    // status: {
    //   type: String,
    //   required: [true, "Status cannot be empty!"],
    //   enum: {
    //     values: ["pending", "returned", "available", "unavailable"],
    //     messages: "Status is either: pending, returned, available or unavailable",
    //   },
    // },
  },
);

const Favourite = mongoose.model("Favourite", favouriteSchema);

module.exports = Favourite;

