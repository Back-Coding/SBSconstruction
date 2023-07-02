const  mongoose  = require("mongoose");
const{Schema}= mongoose;


// rules and regulation follwing the Schema
const UserSchema = new Schema({
   
    email:{
        type:String,
        require :true,
        unique:true
    },
    password:{
        type:String,
        require :true
    },
    date:{
        type:Date,
        default:Date.now
       
    }
  });
  const User=mongoose.model('admin',UserSchema);
  module.exports=User;