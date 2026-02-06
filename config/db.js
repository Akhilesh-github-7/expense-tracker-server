const mongoose = require("mongoose")

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{})
        console.log("MongoDB Atlas is connected successfully");

        // Attempt to drop the legacy unique index on fullName
        try {
            await mongoose.connection.collection('users').dropIndex('fullName_1');
            console.log("Dropped legacy unique index on fullName");
        } catch (e) {
            // Index might not exist or already dropped, which is expected
            console.log("Index fullName_1 check: " + e.message);
        }
        
    }catch(err){
        console.error("MongoDB Atlas connection failed",err);
        process.exit(1)
        
    }
}

module.exports = connectDB