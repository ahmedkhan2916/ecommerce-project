import React from 'react'
import "../assets/Style/productSlider.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/dataSlice.js';

import { useEffect,useState } from 'react';
import axios from "axios";




function ProductSlider() {

    const [data,setData]=useState([])
    const dispatch = useDispatch();
    
   


    const handleClick = async (event) => {

        const id = event.currentTarget.getAttribute('data-id');

          dispatch(fetchData(id));
        

      };
    
    useEffect( ()=>{

    const fetchData = async () => {

        const jsonData = await axios.get("http://localhost:1000/users/getData").then((res) => setData(res.data));

       
        
      };
      console.log(Array.isArray(data));
      fetchData();
     
    },[])

  return (
    <div className='productDetailsCont mt-12 flex'>
<div className='headingCont pl-16 '>
    <h2 className='text-3xl'>Powerful Smartphones</h2>
</div>



{
   
    data.map((item)=>(
<div className='productContainer  ml-16 border-t-2 border-l-2 border-r-2 border-b-2' key={item._id} data-id={item._id} onClick={handleClick}>
<Link to="/product">
    <div className='image w-full'>
{/* <img className='imageProduct w-full' style={{backgroundImage:`url('/images/ferrari.jpg')`}}></img> */}
<div className='phDiv w-full' style={{backgroundImage:`url(${item.product_image})`}}>

    </div>
    </div>
    <div className='productName w-full flex flex-col items-center'>

        <h3 className='text-xl'>  {item.product_name} </h3>
        <span className='text-xl'>{item.price}</span>

    </div>
    </Link>
</div>

    )) }



















    </div>
  )
}

export default ProductSlider