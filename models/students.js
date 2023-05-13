import mongoose, { Mongoose } from "mongoose";

//Defining Schema
const studntSchema=new mongoose.Schema({
    name:{type:String,require:true,trim:true},
    age:{type:Number,require:true,min:18,max:60},
    fees:{type:mongoose.Decimal128,require:true,validate:(value)=> value >= 5000}
});

//Model
const studentModel=mongoose.model("student",studntSchema);

export default studentModel;