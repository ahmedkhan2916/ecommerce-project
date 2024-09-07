import React, { useState } from 'react'
import Search from "../assets/images/Search.png";
import Cart from "../assets/images/cart.png";
import  "../assets/Style/navbarStyle.css"
import {useNavigate} from "react-router-dom";
import brandLogo from "../assets/Socialicons/brand.png"
import logout from "../assets/LoginLogos/logout.png"
import { useDispatch ,useSelector} from 'react-redux';
import { setStatusCode } from '../store/dataSlice.js';
import "../assets/mediaquerys/navbarQuery.css";


// import { set } from 'mongoose';

function myFunction() {
  var x = document.getElementById("myLinks");

  if (x.style.display === "block") 
  {
    x.style.display = "none";
  } 
  else
  {
    x.style.display = "block";
  }

}



function Navbar({user}) {

    // console.log(user.status)
    const dispatch = useDispatch();
    const status=useSelector((state)=>state.status.status)
    const [isDropDownOpen,setIsDropDownOpen]=useState(false);
    const userN=useSelector((state)=>state.username.username);


    if(status==true)
    {
      sessionStorage.setItem("status",status);
      sessionStorage.setItem("username",userN);
    }
   
    const Item=sessionStorage.getItem("status");
    const Username=sessionStorage.getItem("username");
    
   
  
  const navigate=useNavigate();

  const handleSubmit=async (req,res)=>{

    navigate("/users/login")
   
  }

  const handleMouseEnter=()=>{

  setIsDropDownOpen(true);

  }

  const handleMouseExit=()=>{


    setIsDropDownOpen(false);


  }

  const handleLogout=()=>
  {
    dispatch(setStatusCode(false));
    localStorage.clear();
    sessionStorage.clear();
    navigate("/users/login");
  }

 

  return (
    <div className='nav flex bg-slate-50 justify-around '>
     
      <div className='leftLogo'>
        <div className='logo'>
<img src={brandLogo} className='h-24 ml-7'></img>
        </div>
      

      </div>

      <nav className='flex  w-1/4 items-center ml-14 navBar' id="myLinks">
        <ul className='flex w-full justify-evenly text-2xl ' >
                    
          <a href="#"><li className='hover:bg-yellow-400 hover:text-white'>Home</li></a>
          <a href="#"><li className='hover:bg-yellow-400 hover:text-white'>Items</li></a>
          <a href="#"><li className='hover:bg-yellow-400 hover:text-white'>Contact Us</li></a>
          <a href="#"><li className='hover:bg-yellow-400 hover:text-white'>About Us</li></a>

        </ul>
      </nav>

<div className='hamContainer flex items-center'>     
   <a href="javascript:void(0);" class="icon" onClick={myFunction}>

<div className='hamburger'></div>
<div className='hamburger'></div>
<div className='hamburger'></div>

</a>
</div>


      <div className='searchBar flex items-center w-4/12 '>
  
      <input type="text" className='inputNav rounded-lg border-solid border-black w-screen text-2xl'>
      </input>

      <img src={Search} className='w-7 absolute'></img>
      
      </div>
      
<div className='rightSide flex flex-row justify-evenly'>
      <div className='cartDiv flex items-center flex-col justify-center '>
        
      <span className="dot flex justify-center">4</span> 

      <img src={Cart} className='w-7'></img>

      </div>

      <div className="login flex items-center flex-col justify-center cursor-pointer relative"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>

        { Item ? (
          <>
        <div className='loginLogo'></div>
        <span>{Username}</span>
        </>
        )
     :
     (
      <>
           <div className='loginLogo'></div>
     <button className="loginBtnNav bg-yellow-200 w-20 rounded mt-1" onClick={handleSubmit}>Login</button>
     </>
        )}    



        {

Item&&isDropDownOpen&&(
<div className="dropdownMenu absolute top-24 bg-gray-50 rounded-md w-48
 h-72 overflow-hidden flex justify-center">
<ul className='listProfile pt-3'>

<li className='listProfile pt-1 text-xl'>Orders</li>
<li className='listProfile pt-1 text-xl'>Wishlist</li>
<li className='listProfile pt-1 text-xl'>Gifts</li>
<li className='listProfile pt-1 text-xl flex' onClick={handleLogout}> Logout <img src={logout} className="h-6 pl-1"></img></li>

</ul>
</div>


)

}

      </div>
     </div> 



   


</div>


  )
}

export default Navbar