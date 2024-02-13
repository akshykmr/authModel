const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
 {
    email: {
      type: String,
      unique:true,
      required: true,
    },
    phone : { type : Number},
    name: {
      type: String,
    },
    userId : { type : Number, unique : true, ref : "signupWithSocialApp",
    sparse: true },// This allows multiple documents to have a null value for this field},
    profilePicUrl: {
      type: String,
    },
    userSignupWith: {
        type: String,
        enum: ["Email", "Google", "Facebook"],
        default: "Email",
      },

    role: {
      type: String,
      enum: ["super_user", "user"],
      default: "user",
    },
    password: {
      type: String,
    },
    is_deactivated: {
      type: Boolean,
      default: false,
    },
    is_blocked: {
      type: Boolean,
      default: false,
    },
    is_otpVerified: {
      type: Boolean,
      default: false,
    },
    otp : { type : String},
    // otpExpiry: {
    //   type: Date,
    //   index: { expires: '15m', sparse: true } 
    // },
 },
 { timestamps: true }
);

const User = mongoose.model("users", userSchema);

const superAdmin = async () => {
 const isExist = await User.findOne({ role: "super_user" });
 if (!isExist) {
    let obj = {
      email: "1@gmail.com",
      name: "Testing User",
      password: bcrypt.hashSync("1", 5),
      phone: "1234567890",
      role: "super_user",
      is_otpVerified:  true,
    };
    await User.create(obj);
    console.log("Test User Created ");
 } 
};

superAdmin();

module.exports = User;