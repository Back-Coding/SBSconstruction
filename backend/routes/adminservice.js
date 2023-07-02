const express = require('express');
const router = express.Router();
const fetchadmin =require('../middleware/fetchadmin');
const Service = require('../models/Service');
const { body, validationResult } = require('express-validator');


// ROUTE 1: Get All the Notes using: GET "/api/service/fetchallservice". Login required
router.get('/fetchallservice', fetchadmin, async (req, res) => {
    
    try {
        const notes = await Service.find({ admin: req.admin.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new Sarvice using: POST "/api/service/addnote". Login required
router.post('/addservice', fetchadmin, [
    body('title', ' title minimum length 3 ').isLength({ min: 3 }),
    body('image', ' image ').notEmpty(),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
    body('tag',"tag minimum length 3").isLength({min:3}),
    body('type',"type minimum length 3").isLength({min:3})
    ], async (req, res) => {
        try {
            const { title, description, tag ,image,type} = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Service({title, description, tag, image,type, admin: req.admin.id })
            const savedNote = await note.save()

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

    


// ROUTE 3: Update an existing Note using: PUT "/api/service/updatenote". Login required
router.put('/updateserve/:id', fetchadmin, async (req, res) => {
    const { title, description, tag, type, image } = req.body;

    try {
        // Create a newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };
        if (type) { newNote.type = type };
        if (image) { newNote.image = image };

        // Find the note to be updated and update it
        let note = await Service.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }
       
        
        if (note.admin.toString() !== req.admin.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Service.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// ROUTE 4: Delete an existing Note using: DELETE "/api/service/deleteserve". Login required
router.delete('/deleteservice/:id', fetchadmin, async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let note = await Service.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Note
        if (note.admin.toString() !== req.admin.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Service.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 5: SECHING Elemtes in database get "/api/"
router.get('/search', async (req, res) => {
    try {
      const searchTerm = req.query.query; // Retrieve the search query from the request query parameters
      const searchResults = await Service.find({ $text: { $search: searchTerm } });
      res.json(searchResults);
    } catch (error) {
      console.error('Error searching database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router