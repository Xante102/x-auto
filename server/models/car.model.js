const mongoose = require("mongoose");


const carSchema = new mongoose.Schema({
  model: {
    type: String,
    required: [true, "Model cannot be empty!"],
  },

  type: {
    type: String,
    required: [true, "Type cannot be empty!"],
  },

  fuelType: {
    type: Number,
    required: [true, "Fuel type cannot be empty!"],
  },

  transmission: {
    type: String,
    required: [true, "Type of transmission cannot be empty!"],
    enum: {
      values: ["Manual", "Automatic", "Dual-Clutch", "Sequential Manual", "Semi-Automatic ", "CVT"],
      messages: "Transmission is either: manual, automatic, dual-clutch, sequential manual, semi-automatic or CVT",
    },
  },

  seats: {
    type: Number,
    required: [true, "Number of seats cannot be empty!"],
  },

  status: {
    type: String,
    required: [true, "Status cannot be empty!"],
    enum: {
      values: ["pending", "returned", "available", "unavailable"],
      messages: "Status is either: pending, returned, available or unavailable",
    },
  },

  location: {
    type: String,
    required: [true, "Location cannot be empty!"],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
