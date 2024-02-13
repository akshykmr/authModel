const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
require("dotenv").config();
const { registerWithSocialMedia } = require("../controllers/authController");

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      profileFields: ["id", "displayName", "photos", "email"],
    },
    async function (accessToken, refreshToken, profile, cb) {
      const { id, name, email } = profile._json;
      const ImgUrl = profile._json.picture.data.url;
      const profileData = {
        name: name,
        email: email,
        profilePicUrl: ImgUrl,
        userId: id,
        userSignupWith: "Facebook",
      };
      const user = await registerWithSocialMedia(profileData); // sending profile data to register user
      console.log(user, "Login Status");
      return cb(null, user);
    }
  )
);
