const express = require("express");
const carController = require("../controllers/car.controller");
const authController = require("../controllers/auth.controller");


const router = express.Router();

// All routes are protected after this middleware
// router.use(authController.protect);


// All routes after this are restricted only to admin
// router.use(authController.restrictTo("admin"));


router
  .route("/")
  .get(carController.getAllCars)
  .post(carController.createCar);

router
  .route("/:id")
  .get(carController.getCar)
  .patch(carController.updateCar)
  .delete(carController.deleteCar);

module.exports = router;
