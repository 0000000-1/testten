import React from 'react'
import { Link } from 'react-router-dom'
import image1 from "../assets/Product_Image_and_Ref/Handmade_craft_3.jpeg"

const AboutUs = () => {
  return (
    <div className="p-4 mb-8 rounded-lg bg-gray-100">
      <h3 className="text-4xl font-bold text-gray-700 text-center my-4">About Us</h3>
      <div className='flex justify-center gap-6 sm:flex-wrap justify-evenly mb-4'>
        <div className='h-[400px] w-[320px]'>
          <img src={image1} className='img21 h-full w-full object-contain' alt="" />
        </div>
        <div className='sm:items-center sm:w-[85%] md: justify-evenly items-center sm:text-[12px] lg:text-[14px] md:w-[45%] flex flex-col gap-4'>
          <h1 className='text-3xl my-4'>“Welcome to Nourish Naturals”</h1>
          <p className='text-lg font-normal text-gray-600 mb-4' >Nourish Naturals is one stop source of naturals products. Specially we will deliver the quality product from hills of Uttarakhand.
          </p>
          <p className='text-lg font-normal text-gray-600 mb-4'>Nourish Naturals founded in 2024, we come a long way from beginning in Garhwal, Rudraprayag.
          </p>
          <p className='text-lg font-normal text-gray-600 mb-4'>At Nourish Naturals, we uphold a simple yet profound belief: purity is the core of our brand spirit. Committed to delivering products that reflect the true pahad essence, we prioritize the highest standards of quality and safety. From the majestic peaks of the pahad to your doorstep, we assure purity, excellence, and safety in all our offerings.
          </p>
          <Link to='/aboutpage' className='bg-gray-300 py-2 px-4 text-[1rem]'  >more on us!</Link>
        </div>
      </div>
    </div>

    // <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
    //   Learn More
    // </button>
    // {/* <p className="text-lg font-normal text-gray-600 mb-4">
    //   We're a team of passionate individuals dedicated to delivering exceptional products and services.
    // </p>
    // <p className="text-lg font-normal text-gray-600 mb-4">
    //   Our mission is to empower individuals and organizations through innovative solutions.
    // </p> */}
    // <div className='flex flex-col h-full items-center py-6'>
    //     <h3 className=' text-[4rem] m-4'>About us </h3>
    // </div>
  )
}



export default AboutUs