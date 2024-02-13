const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
require("dotenv/config.js");


const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'akshay7053kumar@gmail.com',
      pass: '7053KUMAR@#$&AkSHayy',
    },
  });

const otpService = async (email) =>{
    let otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
    //   const mailOptions = {
    //     from: 'akshay7053kumar@gmail.com',
    //     to: email,
    //     subject: 'Your OTP for Verification',
    //     text: `Your OTP is: ${otp}`,
    //   };

      try {
        // await transporter.sendMail(mailOptions);
        return otp;
        console.log('OTP sent successfully');
      } catch (error) {
        console.error('Error sending OTP: ', error);
      }
}

module.exports = {
    otpService
}