const express = require("express");
const favouriteController = require("../controllers/favourite.controller");
const authController = require("../controllers/auth.controller");


const router = express.Router();

// All routes are protected after this middleware
// router.use(authController.protect);


// All routes after this are restricted only to admin
// router.use(authController.restrictTo("admin"));


router
  .route("/")
  .get(favouriteController.getAllFavourites)
  .post(favouriteController.createFavourite);

router
  .route("/:id")
  .get(favouriteController.getFavourite)
  .patch(favouriteController.updateFavourite)
  .delete(favouriteController.deleteFavourite);

module.exports = router;
