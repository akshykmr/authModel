const express = require("express");
const authRoutes = require("./authRoute.js");

// Import other routes here 
// const otherRoutes = require('path')

const router = express.Router();

// Route to verify server status
router.get("/", (req, res) => res.status(200).send("Server Started...., Working!"));

// auth Routes
router.use("/auth", authRoutes);

// define other routes here
// router.use("/other", otherRoutes);

module.exports = router;