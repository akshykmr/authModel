const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
require("dotenv/config.js");
const { registerWithSocialMedia } = require("../controllers/authController");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, cb) {
      const { sub, name, email } = profile._json;
      const ImgUrl = profile._json.picture.replace("s96-c", "s800-c");
      const profileData = {
        name: name,
        email: email,
        profilePicUrl: ImgUrl,
        userId: sub,
        userSignupWith: "Google",
      };
      const user = await registerWithSocialMedia(profileData); // sending profile data to register user
      console.log(user, "Login Status");
      return cb(null, user);
    }
  )
);
