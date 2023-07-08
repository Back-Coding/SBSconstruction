const mongoose=require('mongoose');

const mogoURL="mongodb://127.0.0.1:27017/SBSDatabase?directConnection=true"
// const mogoURL= `mongodb+srv://SBSDATABASE:AnkitShingE@cluster0.oxcfhcw.mongodb.net/?retryWrites=true&w=majority`;
const connectToMongo= () =>{
        mongoose.connect(mogoURL,()=>{
                console.log("connect to mongo Succssfully");
        })
        
}
        
module.exports=connectToMongo;
        

