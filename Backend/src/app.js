import express  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app=express();


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json

app.use(bodyParser.json())


 

app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true,
}));

//default limit of json is 2mb:

app.use(express.json({limit:"500kb"}));

app.use(express.urlencoded({extended:true,limit:"16kb"}));

// app.use(express.static("public"));

app.use(cookieParser());

// app.get("/signup",(req,res)=>{


//     res.send("hello user")


// })


import { router } from "./routes/user.routes.js";
app.use("/users",router);

export {app};
