const mongoose = require("mongoose")

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{})
        console.log("MongoDB Atlas is connected successfully");
        
    }catch(err){
        console.error("MongoDB Atlas connection failed",err);
        process.exit(1)
        
    }
}

module.exports = connectDB