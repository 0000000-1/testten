import React from 'react'
import { Link } from 'react-router-dom'
import image1 from "../assets/Product_Image_and_Ref/Handmade_craft_1.jpeg"
import image2 from "../assets/Product_Image_and_Ref/Handmade_craft_2.jpeg"
import image3 from "../assets/Product_Image_and_Ref/Handmade_craft_3.jpeg"
import image4 from "../assets/Product_Image_and_Ref/Handmade_craft_4.jpeg"

const OurProducts = () => {
  return (    
  <div className=' flex justify-center items-center flex-col w-full lg:p-8 p-4'>
    <h1 className='my-6 text-[4rem] m-4 font-[500] '>Our Products</h1>
    <div className='grid h-full md:grid-cols-2 lg:grid-cols-4 w-full gap-4'>

    <div className='img2 relative h-full w-full  overflow-hidden'>
        <Link to='/products'>
        <img src={image1} className='img21 h-full w-full object-contain' alt="" />
        <div className='before:absolute flex flex-col justify-center items-center h-full w-full
        before:h-full before:w-full before:opacity-[30%] before:hover:duration-1000 before:hover:opacity-60 before:bg-black before:content before:object-cover 
        absolute top-0'>
          <h1 className='text-[1rem] text-white relative z-2'>HANDMADE CRAFT</h1>
        </div>
        </Link>
      </div>
      <div className='img2 relative h-full w-full overflow-hidden'>
        <Link to='/products'>
        <img src={image2} className='img21 h-full w-full object-contain ' alt="" />
        <div className='before:absolute flex flex-col justify-center items-center h-full w-full
        before:h-full before:w-full before:opacity-[30%] before:hover:duration-1000 before:hover:opacity-60 before:bg-black before:content before:object-cover 
        absolute top-0'>
          <h1 className='text-[1rem] text-white relative z-2'>PULSE (PAHADI DAAL)</h1>
        </div>
          </Link>
      </div>
      <div className='img2 relative h-full w-full overflow-hidden'>
      <Link to='/products'>
        <img src={image3} className='img21 h-full w-full object-cover ' alt="" />
        <div className='before:absolute flex flex-col justify-center items-center h-full w-full
        before:h-full before:w-full before:opacity-[30%] before:hover:duration-1000 before:hover:opacity-60 before:bg-black before:content before:object-cover 
        absolute top-0'>
          <h1 className='text-[1rem] text-white relative z-2'>PAHADI MILLETE</h1>
        </div>
          </Link>
      </div>
      <div className='img2 relative h-full w-full overflow-hidden'>
      <Link to='/products'>
        <img src={image4} className='img21 h-full w-full object-contain ' alt="" />
        <div className='before:absolute flex flex-col justify-center items-center h-full w-full
        before:h-full before:w-full before:opacity-[30%] before:hover:duration-1000 before:hover:opacity-60 before:bg-black before:content before:object-cover 
        absolute top-0'>
          <h1 className='text-[1rem] text-white relative z-2'>SEASONAL FRUITS</h1>
        </div>
          </Link>
      </div>
    </div>
  </div>
  )
}

export default OurProducts