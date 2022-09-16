const express = require("express");
const rentalController = require("../controllers/rental.contoller");
const authController = require("../controllers/auth.controller");


const router = express.Router();

// All routes are protected after this middleware
// router.use(authController.protect);


// All routes after this are restricted only to admin
// router.use(authController.restrictTo("admin"));


router
  .route("/")
  .get(rentalController.getAllRentals)
  .post(rentalController.createRental);

router
  .route("/:id")
  .get(rentalController.getRental)
  .patch(rentalController.updateRental)
  .delete(rentalController.deleteRental);

module.exports = router;
