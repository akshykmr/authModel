const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./src/routes");
require("dotenv/config.js");
const Strategy = require("./src/strategy");
const passport = require("passport");

var logger = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const path = require("path");

const mongoUrl = process.env.DB_URL;
const PORT = process.env.PORT ||  5001;

const app = express();
app.use(logger('dev')); // Logging middleware
app.use(
  cors({
    origin: ["http://localhost:3000", process.env.CORS_ORIGIN],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);// CORS middleware
app.use(express.json()); // JSON parsing middleware
app.use(express.urlencoded({ extended: true })); // URL-encoded parsing middleware
app.use(express.static(path.join(__dirname, "public"))); // Static files middleware

// Session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: mongoUrl,
    collectionName: 'sessions'
  })
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Serialize and deserialize user
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Routes
app.use("/", routes);

// Database connection
mongoose
  .connect(mongoUrl)
  .then(() => console.log(`Successfully connected to MongoDB`))
  .catch((err) =>
    console.error(`Connection to "${mongoUrl}" failed because ${err.message}`)
  );

// Start the server
app.listen(PORT, () => console.log(`Server started on ${PORT}`));

module.exports = app;