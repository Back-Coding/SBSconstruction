const express = require("express");
const router = express.Router();
const User = require("../models/UserLogin");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const fetchuser = require("../middleware/fetchuser");
const bcrypt = require('bcryptjs');
const crypto= require('crypto');
const { body, validationResult } = require('express-validator');


const JWT_SECRET = 'RupeshIsagoodb$oy?';


const sendEmailToOTP = (email, resetLink) => {
  const CLIENT_ID =
    "365563839723-0jfoabebmd5lii33e35kgnfc90f3fnu4.apps.googleusercontent.com";
  const CLIENT_SECRET = "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";
  const REDIRECT_URL = "https://developers.google.com/oauthplayground"; // This should match the redirect URI you specified in the Google Developers Console
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
      from: "SBS Constructor,<noreplyofmassage@gmail.com>",
      to: email,
      subject: "Reset password instructions",
      html: `<!DOCTYPE html>
            <html>
            <head>
            <title> Reset password instructions</title>
            </head>
            <body>
            <h2>Reset password</h2>
            <p> Click the link below to reset your password. Reset Password If you didn’t request this email, you can safely ignore </p>
            <p><a href="${resetLink}">${resetLink}</a></p>
            <p>This code will expire in 10 minutes. If you do not receive this email</p>
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
// Example middleware functions
const middleware1 = (req, res, next) => {
  // Middleware logic
  next();
};

// Router for forgot password
router.post("/forgertpassword", middleware1, async (req, res) => {
  try {
    const email = req.body.email;

    // Check if user exists in the database (Replace with actual database query)
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate and store the reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 10 * 60 * 1000; // Token expires in 10 minutes
    await user.save();
  // Construct the reset URL
  const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;

  // Send password reset email to the user
  // sendEmailToOTP(email, resetToken);
  console.log("end this script");

  res.json({ message: 'Reset email sent', email, resetUrl });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});



router.post('/reset-password/:token', async (req, res) => {
  try {

    const resetToken = req.params.token;
    const newPassword = req.body.confirmPassword;
    // Find user by reset token and check expiration
    const user = await User.findOne({ resetToken, resetTokenExpiry: { $gt: Date.now() } });
    if (!user) {
      // Token is invalid or expired
      return res.status(400).json({ error: 'Invalid or expired reset token' });
    }
    //  Update the user's password
    user.password = newPassword;
    user.passwordResetUsed = true;
    // Reset the reset token and expiry
    user.resetToken =undefined
    user.resetTokenExpiry=undefined

    // Save the updated user
    await user.save();

    res.json({ message: 'Password reset successful' });
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});



// Export the router
module.exports = router;
