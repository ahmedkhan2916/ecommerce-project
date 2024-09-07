import React from 'react'
import Navbar from './Navbar';
import '../App.css';
import ProductSlider from '../components/ProductSlider.js';
import Specification from '../components/Specification.js';
import ExploreContainer from "../components/ExploreContainer.js";
import {useLocation} from "react-router-dom"

function Home() {

  const location =useLocation();
  
  // const [userS,setUserS]=useState([])
  
  const {user}=location.state || false;

 



  return (

    <div className="Home">

      {/* { log ? (
                       <Signup></Signup>
                    ) : (
    
                        <Navbar></Navbar>
                    )
    } */}
    
    
    <Navbar user={user}></Navbar>
    <ProductSlider></ProductSlider>
    {/* <SliderWallpaper></SliderWallpaper> */}
    <Specification></Specification>
    <ExploreContainer></ExploreContainer>
    
   

        </div>

    
  )
}

export default Home