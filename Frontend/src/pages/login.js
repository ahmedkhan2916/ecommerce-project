import React, { useState } from 'react'
import "../assets/Style/login.css"
import axios from "axios"
import fashion from '../assets/LoginLogos/fashion.png';
import gameConsole from '../assets/LoginLogos/game-console.png'
import highHeels from '../assets/LoginLogos/high-heels.png'
import laptop from '../assets/LoginLogos/laptop.png'
import mobile from '../assets/LoginLogos/mobile.png'
import sneaker from '../assets/LoginLogos/sneakers.png'
import shoppingBag from "../assets/LoginLogos/shopping-bag.png"
import Instagram from "../assets/Socialicons/instagram.png"
import Whatsapp from "../assets/Socialicons/whatsapp.png"
import Facebook from "../assets/Socialicons/facebook.png"
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {setStatusCode,setUsername} from '../store/dataSlice.js'

 
function Login() {
  
    const imgArray=[fashion,gameConsole,highHeels,laptop,mobile,sneaker];
  const navigate=useNavigate();
  const [currentIndex,setCurrentIndex]=useState(0);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [status,setStatus]=useState(false);
 const dispatch= useDispatch();
//  const detail=useSelector((state)=>state.details)
//  console.log(detail);

   const handleLogin=async(e)=>{

    e.preventDefault();

    console.log(email,password);

    const bodyData={
      
        email:email,
        password:password,

    }

    try{

        const response=await axios.post("http://localhost:1000/users/login",bodyData);
        console.log("loggin succesfuly",response.data);
        const {accessToken,refreshToken,user}=response.data;
        console.log(accessToken,user);
        localStorage.setItem('refreshToken',refreshToken);
        localStorage.setItem('accessToken',accessToken);
        dispatch(setStatusCode(user.status));
        dispatch(setUsername(user.name));
        
       
        
        setStatus(true);
        navigate('/',{state:{user}});
      
        
        
        
    }catch(error){
        console.log(email,password);
        console.error(error);
    }
    
   }
  
  useState(()=>{

    const interval=setInterval(()=>{

        setCurrentIndex((prevIndex)=>

    prevIndex===imgArray.length-1?0:prevIndex+1


        );



//    return clearInterval(interval);
    },1500)

    // return clearInterval(interval)
},[])

  return (
    <div className="loginContainer  w-full min-h-screen">
    <div className='loginDoubleContainer flex w-full min-h-screen  '>

    <div className="leftContainer  w-1/2 bg-slate-100">

        <div className="leftContainerChild  relative top-14 left-20">
       <div className="brandDiv flex items-center  w-fit">
        <h1 className="text-6xl  ">KHAREED LEE</h1>
        <img src={shoppingBag} className='h-14 pl-1 mb-3'></img>
        </div>
<div className="overflow-hidden w-28 logoContainer my-5  rounded-xl">



<div className="LogoSliderCont flex" style={{transform:`translateX(-${currentIndex*100}%)`,transition:"transform 0.5S ease-in-out"}}>


{
    imgArray.map((item,index)=>(

<img src={item}  key={index} className="h-28 min-w-full object-cover"></img>

    ))
}
    </div>
    </div>


    <div className='ourDetails my-6 w-1/3'>
    
    <h1 className="text-3xl text-gray-600">WELCOME TO OUR STORE FOR EXPLORE AMAZING PRODUCTS AT AMAZING PRICE LOGIN PLEASE..!!</h1>

    </div>

    <div className="helplineNumber flex flex-col">

    <span className="text-xl underline text-amber-400 cursor-pointer hover:text-red-600 w-max ">+91-8882066763</span>
    <span className="text-xl underline text-amber-400 cursor-pointer w-max hover:text-red-600">+91-8882066555</span>

    </div>

    <div className="SocialMediaCont  w-1/3 mt-6">

    <div className='socialMedia flex w-full justify-around'>
    <img src={Whatsapp} className="h-11 cursor-pointer"></img>
    <img src={Instagram}  className="h-11 cursor-pointer"></img>
    <img src={Facebook}  className="h-11 cursor-pointer"></img>

    </div>

    </div>
      
    </div>
   
    </div>


    <div className="rightContainer flex items-center bg-slate-100 w-1/2">

<div className="formContainer pt-16 text-center w-3/4 h-4/5 bg-purple-200 ml-7 rounded-xl">
    <div className='form'>

<div classname="formTextCont">
    <h1 className='LoginText text-6xl'>Login</h1>
    <span className='w-max'>Please Enter your credentials to Login..!</span>
    </div>
        <form className='formSubmit ' onSubmit={handleLogin}>

        <input className="inp w-8/12 h-10 rounded-md placeholder-neutral-800 " placeholder='Username or Email' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} required></input>

        <input className="inp w-8/12 h-10 rounded-md placeholder-neutral-800 mt-2" placeholder='Password' type='text' value={password}onChange={(e)=>setPassword(e.target.value)} required></input>

        <button type="submit" className="btnLogin w-8/12 h-10 rounded-md bg-yellow-500 mt-2 text-xl" >Login</button>

        <span className='flex underline text-red-600 justify-center mt-10 cursor-pointer'>Back to Signup Page</span>
        

        </form>

    </div>

    </div>

    </div>

    </div>

    </div>
  )
}

export default Login;