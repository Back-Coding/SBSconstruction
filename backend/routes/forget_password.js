const express = require("express");
const router = express.Router();
const UserLogin = require("../models/UserLogin");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const fetchuser = require("../middleware/fetchuser");
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');


const JWT_SECRET = 'RupeshIsagoodb$oy?';
let messageOTP=null;

const CLIENT_ID =
  "365563839723-0jfoabebmd5lii33e35kgnfc90f3fnu4.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URL = "https://developers.google.com/oauthplayground"; // This should match the redirect URI you specified in the Google Developers Console

const sendEmailToOTP = (email, otp) => {
  try {
    const OAuth2 = google.auth.OAuth2;

    // Create OAuth2 client
    const oauth2Client = new OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URL // This should match the redirect URI you specified in step 2
    );

    // Generate the access token
    oauth2Client.setCredentials({
      refresh_token:
        "1//04wyWU22Skr7BCgYIARAAGAQSNwF-L9IrMt73pRrUH5U4Y1IRKr84nCR-vhp2FC9qJNG7AzNEDh6N9Lr6kKn0BrgeoLMWsAL7GAQ",
    });

    // Get the access token
    const accessToken = oauth2Client.getAccessToken();

    // Create the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "noreplyofmassage@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken:
          "1//04wyWU22Skr7BCgYIARAAGAQSNwF-L9IrMt73pRrUH5U4Y1IRKr84nCR-vhp2FC9qJNG7AzNEDh6N9Lr6kKn0BrgeoLMWsAL7GAQ",
        accessToken: accessToken,
      },
    });

    // Set up email options and send the email
    const mailOptions = {
      from: "SBS Constructor <noreplyofmassage@gmail.com>",
      to: email,
      subject: "OTP Verification",
      html: `<!DOCTYPE html>
            <html>
            <head>
            <title>SBS Constractor : OTP Verification </title>
            </head>
            <body>
            <h1>OTP Verification</h1>
            <p>This email is to verify your email address. Please enter the following OTP code in the verification :</p>
            <p><b>OTP: ${otp}</b></p>
            <p>This code will expire in 10 minutes. If you do not receive this email, please contact us for assistance.</p>
            </body>
            </html>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        // console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (erorr) {
    console.log(erorr);
  }
};

// Router for forgot password
router.post("/forgotpassword", [ body('email', 'Enter a valid email').isEmail()],  async (req, res) => {
  // Get the user's email address
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const email = req.body.email;

    // Find the user in the database
    const user = await UserLogin.findOne({ email });
    // If the user exists, send an OTP to their email address
    if (user) {
      // Generate a random OTP
      const messageOTP = Math.floor(Math.random() * 1000000);
      // sendEmailToOTP(email, messageOTP);
      console.log(messageOTP)

      // Send the OTP to the user's email address
      // TODO: Implement this
      // res.status(200)
      // res.json({message:"ok"})
      res.json({messageOTP})
    } else {
      // The user does not exist
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Router for reset password
router.post("/resetpassword", async (req, res) => {
  try{
  // Get the user's email address, OTP, and new password
  const email = req.body.email;
  // const otp = req.body.otp;
  const newPassword = req.body.newPassword;
  
  // Find the user in the database
  const user = await UserLogin.findOne({ email });
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(newPassword, salt);
  
  // If the user exists and the OTP is valid, update the user's password
  
  // Update the user's password
  user.password = secPass;
  await user.save();

    // Redirect the user to the login page
    res.json({message:"change ok"})
  } catch(error) {
    // The user does not exist or the OTP is invalid
    res.status(401).send("Invalid credentials");
  }
});

// Export the router
module.exports = router;
