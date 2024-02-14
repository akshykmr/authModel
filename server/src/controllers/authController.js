const express = require("express");
const bcrypt = require("bcrypt");
const { generateJWT } = require("../middelware/jwtTokens.js");
const { User } = require("../models");

const { otpService } = require("../service/otpService.js");

const StatusCodes = require("http-status-codes");
const { assert, createError } = require("../helper/assertError.js");

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
    assert(
      email,
      createError(StatusCodes.CONFLICT, "Please send otp along with email", {
        action: "frontendError",
      })
    );
    assert(
      existingUserWithEmail,
      createError(StatusCodes.NOT_FOUND, "User not found", {
        action: "emailNotFound",
      })
    );
    assert(
      existingUserWithEmail.otp === otp,
      createError(StatusCodes.CONFLICT, "Invalid OTP", {
        action: "invalidOtp",
      })
    );
    existingUserWithEmail.otp = null;
    existingUserWithEmail.is_otpVerified = true;
    existingUserWithEmail.is_deactivated = true;
    await existingUserWithEmail.save();
    return res.json({
      success: true,
      message: "OTP verified successfully",
      action : "verified"
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(error.statusCode || 500).json({
        success: false,
        error: error.message,
        details: error.details,
      });
    } else {
      res.status(500).json({ success: false, error: "An error occurred." });
    }
  }
};

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUserWithEmail = await User.findOne({ email });

    if (existingUserWithEmail) {

      assert(
        (!(existingUserWithEmail.is_otpVerified &&
          existingUserWithEmail.is_deactivated == false)),
        createError(StatusCodes.CONFLICT, "User already registered, please login", {
          action: "alreadyExists",
        })
      );
      if (
        !existingUserWithEmail.is_otpVerified &&
        existingUserWithEmail.is_deactivated
      ) {
        const otp = await otpService(email);
        existingUserWithEmail.otp = otp;
        const otpExpiryTime = Date.now() +  60 *  1000; // Set OTP to expire in  1 minute
        existingUserWithEmail.otpExpiry = otpExpiryTime;
        existingUserWithEmail.is_deactivated = true;
        await existingUserWithEmail.save();
        return res.json({
          success: true,
          message: "OTP has been generated and sent successfully",
          otp: otp,
          action: "otpGenerated",
        });
      } 
      if (
        existingUserWithEmail.is_otpVerified &&
        existingUserWithEmail.is_deactivated
      ) {
        if (!password) {
          return res.json({
            success: true,
            action: "createPassword",
            message: "OTP already verified, Please generate password",
          });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        existingUserWithEmail.password = hashedPassword;
        existingUserWithEmail.is_deactivated = false;
        const response = await existingUserWithEmail.save();
        return res.json({
          success: true,
          message: "User successfully registered, please login",
          user: response,
          action: "registrationDone",
        });
      }
    } else {
      const otp = await otpService(email);
      const otpExpiryTime = Date.now() +  60 *  1000; // Set OTP to expire in  1 minute
      const user = new User({
        email: email,
        otp: otp,
        otpExpiry: otpExpiryTime, // Store the OTP expiration time
        is_otpVerified: false,
        is_deactivated: true,
      });
      await user.save();
      return res.json({
        success: true,
        message: "OTP has been generated and sent successfully",
        otp: otp,
        action: "otpGenerated",
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(error.statusCode || 500).json({
        success: false,
        error: error.message,
        details: error.details,
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
    const { email, password } = req.body;

    // const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userId);

    // const query = isEmail ? { email: userId } : { phone: userId };

    const existingUser = await User.findOne({email});
    
    assert(
      existingUser,
      createError(StatusCodes.NOT_FOUND, "Invalid email!", {
        action: "emailNotFound",
      })
    );

    assert(
      !existingUser.is_blocked,
      createError(StatusCodes.CONFLICT, "Account blocked!", {
        action: "accountBlocked",
      })
    );

    if (!existingUser.is_otpVerified && existingUser.is_deactivated) {
      const otp = await otpService(email);
      const otpExpiryTime = Date.now() +  60 *  1000; // Set OTP to expire in  1 minute
      existingUser.otpExpiry = otpExpiryTime;
       existingUser.otp = otp;
      existingUser.is_deactivated = true;
      await existingUser.save();
      return res.json({
        success: false,
        message: "Incomplete registration, please verify otp",
        action: "otpGenerated",
        otp: otp,
      });
    }

    assert(
      !(existingUser.is_otpVerified && existingUser.is_deactivated),
      createError(StatusCodes.CONFLICT, "Otp verified, please generate Password!", {
        action: "createPassword",
      })
    );
 


    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    assert(
      isPasswordValid,
      createError(StatusCodes.NOT_FOUND, "Invalid Password!", {
        action: "invalidPassword",
      })
    );

    const token = await generateJWT(existingUser._id);
    return res.json({
      success: true,
      message: "Login Success",
      token: token,
      role: existingUser.role,
      action : "loginSuccess"
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(error.statusCode || 500).json({
        success: false,
        error: error.message,
        details: error.details,
      });
    } else {
      res.status(500).json({ success: false, error: "An error occurred." });
    }
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
