const express = require("express");
const bcrypt = require("bcrypt");
const { generateJWT } = require("../middelware/jwtTokens.js");
const { User } = require("../models");

const { otpService } = require("../service/otpService.js");


const StatusCodes = require("http-status-codes");
const { assert ,createError} = require("../helper/assertError.js");

// const generateOtp = async (req, res) => {
//   try {
//     const { email } = req.body;
//     console.log(email,'==')
//     const existingUserWithEmail = await User.findOne({ email });
//     if (!existingUserWithEmail || (existingUserWithEmail && !existingUserWithEmail.is_otpVerified)) {
//       const otp = await otpService(email);
//       if (!existingUserWithEmail) {
//         const user = new User({
//           email: email,
//           otp: otp,
//           is_otpVerified: false,
//           is_deactivated : true
//         });
//         await user.save();
//       } else {
//         existingUserWithEmail.otp = otp;
//         existingUserWithEmail.is_otpVerified = false;
//         await existingUserWithEmail.save();
//       }
//       return res.json({
//         success: true,
//         message: "OTP has been generated and sent successfully",
//         otp: otp,
//       });
//     } else {
//       return res.json({
//         success: false,
//         message: "Already Exist",
//       });
//     }
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const existingUserWithEmail = await User.findOne({ email });
    if (!existingUserWithEmail) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }
    if (existingUserWithEmail.otp !== otp) {
      return res.json({
        success: false,
        message: "Invalid OTP",
      });
    }
    existingUserWithEmail.otp = null;
    existingUserWithEmail.is_otpVerified = true;
    await existingUserWithEmail.save();
    return res.json({
      success: true,
      message: "OTP verified successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // assert(password, createError(StatusCodes.CONFLICT, "Password is required."));
    const existingUserWithEmail = await User.findOne({ email });

    if (existingUserWithEmail) {
      // if (
      //   existingUserWithEmail.is_otpVerified &&
      //   !existingUserWithEmail.is_deactivated
      // ) {
      //   return res.json({
      //     success: false,
      //     message: "User Already Registered",
      //     action: "alreadyExists",
      //     is_otpVerified: existingUserWithEmail.is_otpVerified,
      //   });
      // } 
      assert(!existingUserWithEmail.is_otpVerified &&
        existingUserWithEmail.is_deactivated, createError(StatusCodes.CONFLICT, "User Already Registered", {action : "alreadyExists"}));

       if (
        !existingUserWithEmail.is_otpVerified &&
        existingUserWithEmail.is_deactivated
      ) {
        const otp = await otpService(email);
        existingUserWithEmail.otp = otp;
        await existingUserWithEmail.save();
        return res.json({
          success: true,
          message: "OTP has been generated and sent successfully",
          otp: otp,
          action: "otpGenerated",
          is_otpVerified: existingUserWithEmail.is_otpVerified,
        });
      } else if (
        existingUserWithEmail.is_otpVerified &&
        existingUserWithEmail.is_deactivated
      ) {
        if (!password) {
          return res.json({
            success: true,
            action: "createPassword",
            message: "Otp Already Verified, Please generate Password",
            is_otpVerified: true,
          });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        existingUserWithEmail.password = hashedPassword;
        existingUserWithEmail.is_deactivated = false;
        const response = await existingUserWithEmail.save();
        return res.json({
          success: true,
          message: "User successfully registered",
          user: response,
          action: "registrationDone",
          is_otpVerified: existingUserWithEmail.is_otpVerified,
        });
      }
    } else {
      const otp = await otpService(email);
      const user = new User({
        email: email,
        otp: otp,
        is_otpVerified: false,
        is_deactivated: true,
      });
      await user.save();
      return res.json({
        success: true,
        message: "OTP has been generated and sent successfully",
        otp: otp,
        action: "otpGenerated",
        is_otpVerified: false,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(error.statusCode ||  500).json({
        success: false,
        error: error.message,
        details: error.details 
      });
    } else {
      res.status(500).json({ success: false, error: "An error occurred." });
    }
  }
};

// const registerUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const existingUserWithEmail = await User.findOne({ email });

//     assert(existingUserWithEmail === undefined || existingUserWithEmail.is_otpVerified === false, createError(StatusCodes.CONFLICT, "User Already Registered"));

//     if (!existingUserWithEmail) {
//       const otp = await otpService(email);
//       return res.json({
//         success: true,
//         message: "OTP has been generated and sent successfully",
//         otp: otp,
//         is_otpVerified: false,
//       });
//     } else if (existingUserWithEmail.is_otpVerified && existingUserWithEmail.is_deactivated) {
//       const hashedPassword = await bcrypt.hash(password,  10);
//       existingUserWithEmail.password = hashedPassword;
//       existingUserWithEmail.is_deactivated = false;
//       const response = await existingUserWithEmail.save();
//       return res.json({
//         success: true,
//         message: "User successfully registered",
//         user: response,
//         is_otpVerified: existingUserWithEmail.is_otpVerified,
//       });
//     } else {
//       throw createError(StatusCodes.CONFLICT, "User registration conflict");
//     }
//   } catch (error) {
//     res.status(error.statusCode ||  500).json({ success: false, error: error.message });
//   }
// };

const loginUser = async (req, res) => {
  try {
    const { userId, password } = req.body;

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userId);

    const query = isEmail ? { email: userId } : { phone: userId };

    const existingUser = await User.findOne(query);

    if (!existingUser) {
      return res.json({
        success: false,
        message: `Invalid ${isEmail ? "Email" : "phone"}`,
      });
    }

    if (existingUser.is_blocked) {
      return res.json({
        success: false,
        message: "Account Blocked",
      });
    }
    if (
      !existingUser.is_otpVerified &&
      existingUser.is_deactivated
    ) {
      const otp = await otpService(query);
      return res.json({
        success: false,
        message: "Incomplete Registration, Please verify otp",
        action: "otpGenerated",
        otp: otp,
      });
    }
    if (
      existingUser.is_otpVerified &&
      existingUser.is_deactivated
    ) {
      return res.json({
        success: true,
        action: "createPassword",
        message: "Otp Already Verified, Please generate Password",
        is_otpVerified: true,
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return res.json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = await generateJWT(existingUser._id);
    return res.json({
      success: true,
      message: "Login Success",
      token: token,
      role: existingUser.role,
    });
  } catch (error) {
    console.log(error, "error occurred");
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const registerWithSocialMedia = async (profileData) => {
  try {
    const { name, email, userId, profilePicUrl, userSignupWith } = profileData;

    const existingUserWithUserId = await User.findOne({ userId });
    if (!existingUserWithUserId) {
      const user = new User({
        name: name,
        email: email,
        userId: userId,
        profilePicUrl: profilePicUrl,
        userSignupWith: userSignupWith,
        phone: "",
        is_otpVerified: true,
      });

      // const response = await user.save();
      // const token = await generateJWT(response._id);
      await user.save();
      return user;
    }
    return existingUserWithUserId;
  } catch (error) {
    return error;
  }
};

module.exports = {
  registerUser,
  // generateOtp,
  verifyOtp,
  loginUser,
  registerWithSocialMedia,
};
