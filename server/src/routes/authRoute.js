const express = require("express");
const authController = require("../controllers/authController");
require("dotenv/config.js");

// IMPORTS FOR PASSPORT MODULE
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;


const router = express.Router();


//------------------------------------ EMAIL AUTH ROUTES
// Email Login route
router.post("/login", authController.loginUser);

// Email Signup route
router.post("/signup", authController.registerUser);

// OTP  route
// router.post("/generateOtp", authController.generateOtp);
router.post("/verifyOtp", authController.verifyOtp);


//------------------------------------ GOOGLE AUTH ROUTES
// Login/Signup with Google Strategy
router.get(
  "/login/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// Callback Url for google strategy
router.get(
  "/login/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL || "success", // redirecting to frontend to client url and if not exist will be redirected to /login/google/success route
    failureRedirect: "failure", // redirecting to /login/google/failure
  })
);

// success route
router.get("/login/google/success", (req, res) =>
  res.status(200).send(" Login/Signup Success")
);

// failure route
router.get("/login/google/failure", (req, res) =>
  res.status(400).send("Login/Signup failure!")
);

//------------------------------------ FACEBOOK AUTH ROUTES


router.get('/login/facebook',
  passport.authenticate('facebook',
  { scope: ['email'] } // with scope we can ask for more permission while login from user
  ));

  

router.get('/login/facebook/callback',
passport.authenticate("facebook", {
      successRedirect:
      process.env.CLIENT_URL || "success",
      failureRedirect: "failure",
  }));

// success route
router.get("/login/facebook/success", (req, res) =>
  res.status(200).send(" Login/Signup Success")
);

// failure route
router.get("/login/facebook/failure", (req, res) =>
  res.status(400).send("Login/Signup failure!")
);







//------------------------------------ LOGOUT AUTH ROUTES

// logout and destroying session for google strategy
router.get('/logout', function(req, res){
    req.logout(function(err) {
        if (err) {
            console.error(err);
            res.status(500).send('Logout failed!');
        } else {
            res.clearCookie('connect.sid');
            res.status(200).send('logout Success');
        }
    });
});

module.exports = router;
