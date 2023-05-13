import mongoose from "mongoose";
const connectDB=async(DATABASE_URL)=>{
    try{
        const DB_OPITIONS={
            dbName:"school",
        };
        await mongoose.connect(DATABASE_URL,DB_OPITIONS)
        console.log("connected successfully")
    }catch(err){
        console.log(err)
    }
};

export default connectDB;