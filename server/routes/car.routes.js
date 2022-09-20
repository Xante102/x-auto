const express = require("express");
const carController = require("../controllers/car.controller");
const authController = require("../controllers/auth.controller");
const reviewRouter = require("./../routes/review.routes");



const router = express.Router();

router.use("/:carId/reviews", reviewRouter);

router
  .route("/top-5-popular")
  .get(carController.aliasTopCars, carController.getAllCars);

  router.route("/car-stats").get(carController.getCarStats);


router
  .route("/")
  .get(carController.getAllCars)
  .post(    authController.protect,
    authController.restrictTo("admin"),
    carController.createCar);

router
  .route("/:id")
  .get(carController.getCar)
  .patch(  authController.protect,
    authController.restrictTo("admin"),
    carController.updateCar)
  .delete(    authController.protect,
    authController.restrictTo("admin"),
    carController.uploadCarImage,
    carController.resizeCarImage,
    carController.deleteCar);

module.exports = router;
