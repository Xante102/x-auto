const mongoose = require("mongoose");
const Car = require("./car.model");





const reviewSchema = new mongoose.Schema(
  {
    response: {
      type: String,
      required: [true, "Response cannot be empty!"],
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
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
  {
    // makes sure that when we have a virtual property(a field that is not stored in the database but calculated using some other value) we wan this to show up whenever there is an output
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.index({car: 1, user:1}, {unique:true})

reviewSchema.pre(/^find/, function (next) {
 
    this.populate({
    path: "user",
    select: "name photo",
  });

  next();
});

reviewSchema.statics.calcAvgRatings = async function(carId) {
 const stats = await this.aggregate([
    {
      $match: {car: carId}
    },
    {
      $group:{
        _id: '$car',
        nRating: {$sum: 1},
        avgRating: {$avg: '$rating'}
      }
    }
  ]);

  if(stats.length > 0) {
  await Car.findByIdAndUpdate(carId, {
    ratingsQty: stats[0].nRating,
    ratingsAvg: stats[0].avgRating
  });
} else {
  await Car.findByIdAndUpdate(carId, {
    ratingsQty: 0,
    ratingsAvg: 4.5
  });
}
};


reviewSchema.pre(/^findOneAnd/, async  function(next) {
  this.r = await this.findOne();
  next();
});

reviewSchema.post('save', async function() {
  // this points to the current review
  await this.r.constructor.calcAvgRatings(this.r.car);
});


const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;

