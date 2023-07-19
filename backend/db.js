const mongoose=require('mongoose');


const mongoURL= process.env.DATABASE ||`mongodb+srv://SBSDATABASE:AnkitShing@cluster1.9cnv8dj.mongodb.net/SBSDATABASE?retryWrites=true&w=majority` ;


const connectToMongo= () =>{
        mongoose.connect(mongoURL,()=>{
                console.log("connect to mongo Succssfully");
        })
        
}
        
module.exports=connectToMongo;
        

