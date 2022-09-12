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
  },
);

const Favourite = mongoose.model("Favourite", favouriteSchema);

module.exports = Favourite;

