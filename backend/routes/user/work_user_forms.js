const express = require('express');
const router = express.Router();
const UserForms = require('../../models/UserForms');
const fetchadmin=require('../../middleware/fetchadmin')
const { body, validationResult } = require('express-validator');

function formSubmissionMiddleware(req, res, next) {
    if (req.method === 'POST' && req.path === '/submit') {
      // Handle the form submission
    } else {
      next(); // Proceed to the next middleware
    }
  }
  
  
  // ROUTE 1: pop meu service field like fore endpoint a Interior,Exterior,ReW,ExraFast Add a new conect user woring using: POST "/api/service/usercontectforms". Login required
  // : Add a new conect user woring using: POST "/api/service/u/usercontectforms". Login required
router.post('/usercontectforms',formSubmissionMiddleware , [
    body('name', ' name minimum length 3 ').isLength({ min: 3 }),
    body('email', ' email is Invalid').notEmpty(),
    body('phoneno', 'phone no enter 10 digit').isLength({ min: 10}),
    body('pincode',"Froms enter 6 digit").isLength({min:6}),
    body('address',"address minimum length 3").isLength({min:3}),
    body('description',"description minimum length 3").isLength({min:3}),
    body('city',"city minimum length 3").isLength({min:3}),
    body('state',"state minimum length 3").isLength({min:3}),
    body('field',"field minimum length 3").isLength({min:3})
    ], async (req, res) => {
        try {
            const { name,email,phoneno,pincode,address,description,city,state,field} = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new UserForms({name,email,phoneno,pincode,address,description ,city,state,field})
            const savedNote = await note.save()
            return res.status(200).json({  ok: "Succssfuly submit forms" });

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })



// Router 2:  Delete the Froms -> http://localhost:5000/api/service/u/deleteonerowforms/6499a0ddc455a24404132f90
router.delete('/deleteonerowforms/:id',fetchadmin,async (req, res) => {
   
      try {
          // Find the note to be delete and delete it
          let note = await UserForms.findById(req.params.id);
          if (!note) { return res.status(404).send("Not Found") }

          // Allow deletion only if user owns this Note
          if (note._id.toString() !== req.params.id) {
              return res.status(401).send("Not Allowed");
          }
  
          note = await UserForms.findByIdAndDelete(req.params.id)
          res.json({ "Success": "Note has been deleted"});
      } catch (error) {
          res.status(500).send("Internal Server Error");
      }
  })

module.exports=router;