const express = require("express");
const {
  register,
  login,
  logout,
  getMe,
  forgotPassword,
  updatePassword,
  updateDetails,
  resetPassword
} = require("../controllers/auth");

const router = express.Router();
const { protect } = require("../middleware/auth");
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", protect, getMe);
router.get("/updatedetails", protect, updateDetails);
router.get("/updatepassword", protect, updatePassword);
router.post("/forgotpassword", forgotPassword);
router.get("/resetpassword/:resettoken", protect, resetPassword);

module.exports = router;
