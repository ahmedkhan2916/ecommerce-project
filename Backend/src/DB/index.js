// require ('dotenv').config({path:'../../env'})
import mongoose from "mongoose";
import dotenv from "dotenv";
import { DBNAME } from "../constants.js"
import express from "express";

const app=express();

const connectDb=async ()=>{
    

    try{

       const connectInstance= await mongoose.connect(`mongodb+srv://ahmed:OZSOJh7HijAps7b2@cluster0.p7fsp8z.mongodb.net/MERN`);
       console.log("dbConnected Successfuly");

       

    }

    catch(error)
    {

    console.log(error)

    }
}

export default connectDb;
    


