const  mongoose  = require("mongoose");
const{Schema}= mongoose;


// rules and regulation follwing the Schema
const UserForms = new Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref :'user'
    },
    name:{
        type:String, require :true
    },
    email:{
        type:String, require :true,  unique:true
    },
    phoneno:{
        type:String, require :true
    },
    pincode:{
        type:String ,require:true
    },
    address:{
        type:String, require:true
    },
    description:{
        type:String, require:true
    },city:{
        type:String,require :true
    },state:{
        type:String,require :true
        
    },field:{
        
        type:String,require :true
    },
    date:{
        type:Date,
        default:Date.now
       
    }
  });
  const Froms=mongoose.model('WorkFormsService',UserForms);
  module.exports=Froms;