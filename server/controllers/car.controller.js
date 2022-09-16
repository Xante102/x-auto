const Car = require("./../models/car.model");
const catchAsync = require("./../utils/catch.async");
const factory = require("./handler.factory");
const sharp = require("sharp");
const multer = require("multer");


const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image!  Please upload only images.", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadCarImage = upload.fields([
  {name: 'image', maxCount: 1}
]);


exports.resizeCarImage = catchAsync(async (req, res, next ) => {

  if(req.files.image) return next();

  // 1) Car image
  req.body.image = `car-${req.params.id}-${Date.now()}-image.jpeg`;
  await sharp(req.files.image[0].buffer)
    .resize(2000, 1333)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/cars/${req.body.image}`);

  next();
});


exports.aliasTopCars = ( req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "-ratingsAvg,price";
  req.query.fields = "model,price,ratingsAvg,fuelType,transmission,seats";
  next();
};

exports.getAllCars = factory.getAll(Car);
exports.getCar = factory.getOne(Car, { path: "reviews" });
exports.createCar = factory.createOne(Car);
exports.updateCar = factory.updateOne(Car);
exports.deleteCar = factory.deleteOne(Car);

exports.getCarStats = catchAsync(async (req, res, next) => {
  const stats = await Car.aggregate([
    {
      $match: { ratingsAvg: { $gte: 4.5 } },
    },
    {
      $group: {
        _id: { $toUpper: "$difficulty" },
        numCars: { $sum: 1 },
        numRatings: { $sum: "$ratingsQty" },
        avgRating: { $avg: "$ratingsAvg" },
        avgPrice: { $avg: "$price" },
        minPrice: { $min: "$price" },
        maxPrice: { $max: "$price" },
      },
    },
    {
      $sort: { avgPrice: 1 },
    },
  ]);
  res.status(200).json({
    status: "success",
    data: {
      stats,
    },
  });
});
