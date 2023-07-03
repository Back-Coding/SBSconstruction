const express = require('express');
const router = express.Router();
const User = require('../../models/UserLogin');
const UserForm = require('../../models/UserForms');
const { body, validationResult } = require('express-validator');


// ROUTE 1: Get All the all user  using: GET "api/u/fetchalluser". Login required
router.get('/fetchalluser', async (req, res) => {
     
    try {
        const notes = await User.find().select("-password");
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTER 2 : GET All The Working Forms in user api/u/fetchforms  
router.get('/fetchforms', async (req, res) => {
     
    try {
        const forms = await UserForm.find();
        res.json(forms)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router