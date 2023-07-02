const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const { body, validationResult } = require('express-validator');

// all Data show frontend appliction for user no login required

// Router 1 get Request user not login site


// Middleware function
const fetchInteriorData = async (req, res, next) => {
  try {
    const interiorData = await Service.find({ type: 'Interior' });
    req.interiorData = interiorData; // Attach the fetched data to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
};
const fetchExteriorData = async (req, res, next) => {
  try {
    const interiorData = await Service.find({ type: 'Exterior' });
    req.interiorData = interiorData; // Attach the fetched data to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
};
const fetchExtraFastData = async (req, res, next) => {
  try {
    const interiorData = await Service.find({ type: 'ExtraFast' });
    req.interiorData = interiorData; // Attach the fetched data to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
};
const fetchRepairingWorkData = async (req, res, next) => {
  try {
    const interiorData = await Service.find({ type: 'RepairingWork' });
    req.interiorData = interiorData; // Attach the fetched data to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
};

// Router 1 :Interior GET API endpoint for fetching interior data
router.get('/interior', fetchInteriorData, (req, res) => {
  const interiorData = req.interiorData; // Access the fetched data from the request object
  res.json(interiorData);
});

// Router 2 : Exterior GET API endpoint for fetching interior data
router.get('/exterior', fetchExteriorData, (req, res) => {
  const interiorData = req.interiorData; // Access the fetched data from the request object
  res.json(interiorData);
});

// Router 3 :Extra Fast Service GET API endpoint for fetching interior data
router.get('/extrafast', fetchExtraFastData, (req, res) => {
  const interiorData = req.interiorData; // Access the fetched data from the request object
  res.json(interiorData);
});
// Router 4 :Repairing Work Service GET API endpoint for fetching interior data
router.get('/repairingwork', fetchRepairingWorkData, (req, res) => {
  const interiorData = req.interiorData; // Access the fetched data from the request object
  res.json(interiorData);
});

module.exports = router;

