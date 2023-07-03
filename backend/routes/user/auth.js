const express = require('express');
const User = require('../../models/UserLogin');
const Admin= require('../../models/AdminLogin');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../../middleware/fetchuser');


const JWT_SECRET = 'RupeshIsagoodb$oy?';

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Check whether the user with this email exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      success = false;
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    });
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;

    // res.json(user)
    res.json({success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


// ROUTE 2: Authenticate a User using: POST "/api/auth/login".  login required
router.post('/login', [
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
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser,  async (req, res) => {

  try {
    userId = req.user.id;

    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// =================================================================================================================================//
// Crate Admin site here auth 
// ROUTE 1: Crate admin a admin using POST "/api/auth/admin/createadmin". Login not requird 
// const JWT_SECRET_ADMIN = 'RupeshIsagoodb$oy???';
// router.post('/admin/createadmin', [
//   // body('name', 'Enter a valid name').isLength({ min: 3 }),
//   body('email', 'Enter a valid email').isEmail(),
//   body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
// ], async (req, res) => {
//   let success = false;
//   // If there are errors, return Bad request and the errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   try {
//     // Check whether the user with this email exists already
//     let admin = await Admin.findOne({ email: req.body.email });
//     if (admin) {
//       success = false;
//       return res.status(400).json({ error: "Sorry a user with this email already exists" })
//     }
//     const salt = await bcrypt.genSalt(10);
//     const secPass = await bcrypt.hash(req.body.password, salt);

//     // Create a new user
//     admin = await Admin.create({
//       name: req.body.name,
//       password: secPass,
//       email: req.body.email,
//     });
//     const data = {
//       admin: {
//         id: admin.id
//       }
//     }
//     const authtoken = jwt.sign(data, JWT_SECRET_ADMIN);
//     success = true;

//     // res.json(user)
//     res.json({success, authtoken })

//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// })

// // ROUTE 2: Authenticate a admin using POST "/api/auth/admin/login". Login requird
// router.post('/admin/login', [
//   body('email', 'Enter a valid email').isEmail(),
//   body('password', 'Password cannot be blank').exists(),
// ], async (req, res) => {
//   let success = false;
//   // If there are errors, return Bad request and the errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { email, password } = req.body;
//   try {
//     let admin = await Admin.findOne({ email });
//     if (!admin) {
//       success = false
//       return res.status(400).json({ error: "Please try to login with correct credentials" });
//     }

//     const passwordCompare = await bcrypt.compare(password, admin.password);
//     if (!passwordCompare) {
//       success = false
//       return res.status(400).json({ success, error: "Please try to login with correct credentials" });
//     }

//     const data = {
//       admin: {
//         id: admin.id
//       }
//     }
//     const authtoken = jwt.sign(data, JWT_SECRET_ADMIN);
//     success = true;
//     res.json({ success, authtoken })

//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }


// });


module.exports = router
