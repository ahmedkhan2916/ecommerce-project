import React, { useEffect,useState } from 'react'
import axios from "axios";
import { useSelector } from 'react-redux';


function Purchasing_page() {

  const data = useSelector(state => state.data.data);  // Access the inner `data` object
  const error = useSelector(state => state.data.error);  // Access `error` state
  const loading = useSelector(state => state.data.loading);
 
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (

<div>

  <h1 className='text-4xl' id="imagez"> {data.product_name} </h1>

  
</div>

  )
}

export default Purchasing_page