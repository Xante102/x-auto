const express = require("express");
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");


const router = express.Router();

router.post("/sign-up", authController.signUp);
router.post("/login", authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.patch("/reset-password/:token", authController.resetPassword);

// All routes are protected after this middleware
router.use(authController.protect);

router.patch("/update-password", authController.updatePassword);

router.get("/me", userController.getMe, userController.getUser);
router.patch("/update-me", userController.uploadUserPhoto, userController.resizeUserPhoto, userController.updateMe);
router.delete("/delete-me", userController.deleteMe);

// All routes after this are restricted only to admin
router.use(authController.restrictTo("admin"));


router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
