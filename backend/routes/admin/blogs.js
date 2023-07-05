const express = require('express');
const router = express.Router();
// const multer = require('multer');
const path = require('path');
const fetchadmin =require('../../middleware/fetchadmin');
const Blog=require('../../models/Blogs');
const { body ,validationResult } = require('express-validator');


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//       const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
//       cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
//     },
//   });
//   const upload = multer({ storage });


// Update a blog with customized image content
// router.put('/update-blogs/:id', upload.single('image'),async(req, res) => {

router.put('/update-blogs/:id', fetchadmin, async(req, res) => {
  try{
    // const {updatedBlogData}=req.body;
    const { title,content,imagePath1,imagePath2,tag,footercontent} =req.body;
    const blogId = req.params.id;
    const updatedBlogData1  = {
      title:  title,
      content: content ,
      tag:tag?tag:null,
      imagePath1:imagePath1,
      imagePath2:imagePath2,
      footercontent: footercontent 
      // Add any other fields as needed
  };
    let note = await Blog.findById(blogId);
    if (!note) { return res.status(404).send("Not Found") }
   
    
    if (note.admin.toString() !== req.admin.id) {
        return res.status(401).send("Not Allowed");
    }
    Blog.findByIdAndUpdate(blogId, updatedBlogData1, { new: true })
      .then((updatedBlog) => {
        res.json(updatedBlog);
      })
      .catch((error) => {
        console.error('Failed to update blog:', error);
        res.status(500).json({ error: 'Failed to update blog' });
      });
    }catch(erorr){
      console.log(erorr)
    }
  });
  
  // Delete a blog
  router.delete('/delete-blog/:id',fetchadmin,async (req, res) => {
    try {
    let note = await Blog.findById(req.params.id);
    if (!note) { return res.status(404).send("Not Found") }

    // Allow deletion only if user owns this Note
    if (note.admin.toString() !== req.admin.id) {
        return res.status(401).send("Not Allowed");
    }
    
    Blog.findByIdAndDelete( req.params.id)
      .then(() => {
        res.json({ message: 'Blog deleted successfully' });
      })
      .catch((error) => {
        console.error('Failed to delete blog:', error);
        res.status(500).json({ error: 'Failed to delete blog' });
      });
    } catch (error) {
    
    }
  });
  
  // Fetch all blogs
  router.get('/fetchblogs', (req, res) => {

    Blog.find()
      .then((blogs) => {
        res.json(blogs);
      })
      .catch((error) => {
        console.error('Failed to fetch blogs:', error);
        res.status(500).json({ error: 'Failed to fetch blogs' });
      });
  });
  
  // Create a new blog with customized image contentw
  router.post('/addblog', fetchadmin, [
    body('title', ' title minimum length 3 ').isLength({ min: 3 }),
    body('imagePath1', ' imagePath1 is not empty  '),
    body('imagePath2', ' imagePath2 is not empty  '),
    body('content', 'content must be atleast 5 characters').isLength({ min: 5 }),
    body('footercontent', 'footer Contents must be atleast 5 characters').isLength({ min: 5 })
    ],async (req, res) => {
      const { title,content,imagePath1,imagePath2,tag,footercontent} = req.body;
    try {    

            // If there are errors, return Bad request and the errors
           
      const errors = validationResult(req);
       if (!errors.isEmpty()) {
           return res.status(400).json({ errors: errors.array() });
        }

          const newBlogData = {
            admin: req.admin.id,
            title:  title,
            content: content ,
            tag:tag?tag:null,
            imagePath1:imagePath1?imagePath1:null,
            imagePath2:imagePath2?imagePath1:null,
            footercontent: footercontent 
            // Add any other fields as needed
        };
       Blog.create(newBlogData)
       .then((newBlog) => {
         res.json({message:" add a blogs"});
       })
       .catch((error) => {
         console.error('Failed to create blog:', error);
         res.status(500).json({ error: 'Failed to create blog' });
       });
         
    } catch (error) {
      
    }
  });
  
  // Add any additional routes as needed


module.exports = router