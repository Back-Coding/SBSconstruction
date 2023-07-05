const mongoose = require('mongoose');

// Define the schema for a blog post
const blogSchema = new mongoose.Schema({
  admin:{
    type:mongoose.Types.ObjectId,
    ref :'admin'
},
  title: { type: String, required: true },
  content: { type: String, required: true },
  tag: { type: String,  },
  imagePath1: { type: String },
  imagePath2: { type: String },
  footercontent: { type: String, required: true },
  createdDataAt: {
    type: Date,
    default: Date.now,
  },
})
// Add any other fields as needed
// Index based
blogSchema.index({ title: 'text',content: 'text' ,image:'text'}); 
// Create a model based on the schema
module.exports=mongoose.model('blogs',blogSchema);

