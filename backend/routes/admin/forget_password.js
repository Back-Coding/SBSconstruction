const express = require("express");
const router = express.Router();
const Admin = require("../../models/AdminLogin");
const bcrypt = require('bcryptjs');
const crypto= require('crypto');
const SendEmail  = require('../SeadEmail');





// Example middleware functions
const middleware1 = (req, res, next) => {
  // Middleware logic
  next();
};
// -----------------------------------------------------------USER--------------------------------------------------
// ROUTER 1: Forgert REQUIST sead to gmail to token this  --No Login required

// Router for forgot password
router.post("/forgert-password-admin", middleware1, async (req, res) => {
  try {
    const email = req.body.email;

    // Check if user exists in the database (Replace with actual database query)
    const user = await Admin.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate and store the reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 10 * 60 * 1000; // Token expires in 10 minutes
    await user.save();
  // Construct the reset URL
  const resetUrl = `http://localhost:3000/reset-password-admin/${resetToken}`;

  // Send password reset email to the user
  SendEmail.sendEmail(email, resetUrl);
  res.json({ message: 'Reset email sent'});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
// ROUTER 2: User Based Forgert Password
router.post('/reset-password-admin/:token', async (req, res) => {
  try {
    
    const resetToken = req.params.token;
    console.log(resetToken)
    // Find user by reset token and check expiration
    const user = await Admin.findOne({ resetToken, resetTokenExpiry: { $gt: Date.now() } });
    if (!user) {
      // Token is invalid or expired
      return res.status(400).json({ error: 'Invalid or expired reset token' });
    }
    
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.confirmPassword, salt);

    //  Update the user's password
    user.password = secPass ;
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
