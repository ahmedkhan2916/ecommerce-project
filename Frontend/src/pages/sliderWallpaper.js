import React, { useEffect, useState } from 'react'
import image1 from "./img.jpg";
import image2 from "./img2.jpg";
import image3 from "./img3.jpg";
import "./sliderCSS.css"


function SliderWallpaper() {


    const [data,setData]=useState("");

    let [count,setCount]=useState(-1);

    const dat=[image1,image2,image3];

    useEffect(()=>{

        setInterval(()=>{

            if(count==3)
            {
                setCount(count=0);
            }
                    setData(dat[count]);
                    setCount(count=count+1);

    },2000)

},[]);


  return (

    <div className='imageSlider'>
    <div className='imageContainer bg-no-repeat bg-cover bg-center'>
        <img src={data} className =' h-full w-full ' ></img>
    </div>
    </div>

        )
}
export default SliderWallpaper;