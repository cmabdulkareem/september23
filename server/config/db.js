import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/sep23")
    .then(()=>{console.log("connected to db");})
    .catch((err)=>console.log(err))