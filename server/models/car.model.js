const mongoose = require("mongoose");


const carSchema = new mongoose.Schema({
  model: {
    type: String,
    required: [true, "Car model cannot be empty!"],
  },

  type: {
    type: String,
    required: [true, "Type cannot be empty!"],
  },

  image: {
    type: String,
    required: [true, "Car image cannot be empty!"],
  },


  fuelType: {
    type: Number,
    required: [true, "Fuel type cannot be empty!"],
  },

  price: {
    type: Number,
    required: [true, "Price cannot be empty!"],
  },

  transmission: {
    type: String,
    required: [true, "Type of transmission cannot be empty!"],
    enum: {
      values: ["manual", "automatic", "dual-clutch", "sequential manual", "semi-automatic ", "CVT"],
      messages: "Transmission is either: manual, automatic, dual-clutch, sequential manual, semi-automatic or CVT",
    },
  },

  seats: {
    type: Number,
    required: [true, " cannot be empty!"],
    min: [2, "Number of seats must be 2 or above"],
    max: [10, "Number of seats must be 10 or less"],
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
  ratingsAvg: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must be 1.0 or above"],
    max: [5, "Rating must be 5.0 or less"],
    set: val => Math.round(val * 10) /10
  },
  ratingsQty: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

carSchema.index({price:1, ratingsAvg:-1});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
