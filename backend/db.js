const mongoose=require('mongoose');




const connectToMongo= () =>{
        mongoose.connect(process.env.DATABASE ,()=>{
                console.log("connect to mongo Succssfully");
        }).catch(()=>{
                console.log("Not Connect mangodbs");
        })
        
}
        
module.exports=connectToMongo;
        

