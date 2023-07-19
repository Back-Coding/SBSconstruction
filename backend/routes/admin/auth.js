const express = require('express');
const Admin= require('../../models/AdminLogin');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const JWT_SECRET_ADMIN = 'RupeshIsagoodb$oy???';


// Crate Admin site here auth 
// ROUTE 1: Crate admin a admin using POST "/api/auth/admin/createadmin". Login not requird 
router.post('/admin/createadmin-rupesh', [
  // body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  console.log("Hid admin function ")
  try {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the user with this email exists already
    let admin = await Admin.findOne({ email: req.body.email });
    if (admin) {
      success = false;
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    // Create a new user
    admin = await Admin.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    });
    const data = {
      admin: {
        id: admin.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET_ADMIN);
    success = true;

    // res.json(user)
    res.json({success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// ROUTE 2: Authenticate a admin using POST "/api/auth/admin/login". Login requird
router.post('/admin/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let admin = await Admin.findOne({ email });
    if (!admin) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, admin.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      admin: {
        id: admin.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET_ADMIN);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


module.exports = router