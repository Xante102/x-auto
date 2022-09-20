const express = require("express");
const favouriteController = require("../controllers/favourite.controller");
const authController = require("../controllers/auth.controller");


const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(favouriteController.getAllFavourites)
  .post(
    authController.restrictTo("user"),
    favouriteController.setCarUserIds,
    favouriteController.createFavourite
  );

router
  .route("/:id")
  .get(favouriteController.getFavourite)
  .patch(
    authController.restrictTo("user", "admin"),
    favouriteController.updateFavourite
  )
  .delete(
    authController.restrictTo("user", "admin"),
    favouriteController.deleteFavourite
  );


module.exports = router;

