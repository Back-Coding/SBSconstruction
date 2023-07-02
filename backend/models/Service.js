const { default: mongoose } = require("mongoose");
const{Schema}= mongoose;


const ServiceSchema = new Schema({
    admin:{
        type:mongoose.Types.ObjectId,
        ref :'admin'
    },
    title:{
        type:String,
        require :true
    },
    description:{
        type:String,
        require :true,
        
    },
    tag:{
        type:String,
        require :true,
        default:"General"
    },
    type:{
        require :true,
        type:String
    },
    image:{
        type:String,
        required: true
    },
    date:{
        type:Date,
       default:Date.now
    },
  });
  ServiceSchema.index({ title: 'text', description: 'text' ,type:'text',image:'text'}); 
  module.exports=mongoose.model('service',ServiceSchema);