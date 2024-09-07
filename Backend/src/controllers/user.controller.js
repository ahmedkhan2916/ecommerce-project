import { json } from "express";
import jwt from "jsonwebtoken"
import { User } from "../models/user.signup.js";
import { ProductD } from "../models/productDatabase.js";
import dotenv from "dotenv"
import bcrypt from "bcrypt"


dotenv.config({path:"../.env"});

const generateAccessToken=(user)=>{
  
return jwt.sign(user,"AHMEDACCESSKINGDOM",{expiresIn:"1h"});


}


const generateRefreshToken=(user)=>{
  
  return jwt.sign(user,"AHMEDREFRESHKINGDOM",{expiresIn:"7d"});
  
  }

const SignUp=async (req,res) =>
  {

    const {firstname,lastname,phone,username,password,email} = req.body;

    if([firstname,lastname,phone,username,password,email].some((field)=> field?.trim()===""))

        {
            return res.send("Error in Signup Fill the Data Correctly..!");
        }

      console.log(req.body);

      const user=await User.create({

        firstname,
        lastname,
        email,
        phone,
        username,
        password,

      });

     const createdUser=await User.findById(user._id).select("-password");

     if(!createdUser)
     {

      res.send("Error in Database..!!!!");

     }



      res.json({firstname:firstname,lastname:lastname,email:email,contact:phone,username:username,password:password});

}

// import bcrypt from 'bcrypt';
// import { generateAccessToken, generateRefreshToken } from './tokenUtils.js';
// import User from '../models/User.js'; // Adjust the path based on your folder structure

const Login = async (req, res) => {
  const { email, password } = req.body;

  // Check if all fields are filled
  if ([ email, password].some(str => !str || str.trim() === '')) {
    return res.status(402).send("Error: Please fill all fields correctly.");
  }

  try {
    // Check if user exists
    const userCheck = await User.findOne({ $or: [{ email }] });
    if (!userCheck) {
      return res.status(404).send("This User does not exist.");
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, userCheck.password);
    if (!isMatch) {
      return res.status(406).send("Password does not match.");
    }

    // Generate tokens
    const accessToken = generateAccessToken({ Id: userCheck._id });
    const refreshToken = generateRefreshToken({ Id: userCheck._id });

    // Save refreshToken in the database
    userCheck.refreshToken = refreshToken;
    await userCheck.save({ validateBeforeSave: false });

    // Return the tokens
    return res.status(200).json({ accessToken, refreshToken,user:{

      id:userCheck._id,
      name:userCheck.firstname,
      email:userCheck.email,
      status:true
      


    } });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).send("Server error.");
  }
};

const UploadPost=async (req,res)=>{

  const {company_name,product_name,price,product_details,product_image}=req.body;

  const user=await ProductD.create({

    company_name,
    product_name,
    price,
    product_details,
    product_image

  });

  
  const uploaduser= await ProductD.findById(user._id);

  if(!uploaduser)
  {

    return res.send("database Error..!!!");

  }

 return res.send("Data Successfully Stored..!!!");



}

const getData=async (req,res)=>{


  const data=await ProductD.find();

  if(!data)
  {
   return res.send("no data found sorry...!!!");
  }

  return res.json(data);

}

const sendDataById=async(req,res)=>{


const {payload} = req.body;


console.log(payload);


 const userProduct=await ProductD.findById(payload);

 if(!userProduct)
 {


  return res.sendStatus(400).json({"data":"Sorry data not Found..>!!!"});

 }

return res.json(userProduct);

}




export {SignUp,Login,UploadPost,getData,sendDataById};
