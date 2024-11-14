import React from 'react'
import Contactus from '../sections/Contactus'
import image from '../assets/Product_Image_and_Ref/Seasonal_Fruits_pahadi_Nimbu.webp'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-green-900 text-white p-10'>
      <div className='flex sm:items-center sm:flex-col md:flex-row w-full gap-4 lg:gap-0' >
        <div className=''>
          <Contactus />
        </div>
        <div className='w-[200px] h-[10%] flex flex-col items-center sm:justify-center flex'>
         <Link to="/">
          <img src={image} alt=" Nourish Naturals" className='rounded-full ' />
          <p> Nourish Naturals </p>
         </Link>
        </div>
        <div>
        </div>
        <div className='flex flex-col gap-8'>
          <div className=''>
            <ul className='sm:items-center text-[10px] lg:text-[14px] justify-center items-start flex flex-wrap gap-4'>
              <li>
                <Link to="/policy" className="text-sm font-normal text-gray-200 mx-2">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/policy" className="text-sm font-normal text-gray-200 mx-2">Terms of Services</Link>
              </li>
              <li>
                <Link to="/policy" className="text-sm font-normal text-gray-200 mx-2">Return, Exchange, and Refund Policy</Link>
              </li>
              <li>
                <Link to="/contactpage" className="text-sm font-normal text-gray-200 mx-2">Contact Us</Link>
              </li>
              <li>
                <Link to="/policy" className="text-sm font-normal text-gray-200 mx-2">Shipping</Link>
              </li>
            </ul>
          </div>
          <div className=''>
            <ul className='sm:items-center justify-center text-[10px] lg:text-[14px] flex  gap-4'>
              <li>
                <Link to="https://instagram.com" className="text-lg font-normal text-gray-100 mx-2"><abbr title="instagram"><i className="fab fa-instagram"></i></abbr></Link>
              </li>
              <li>
                <Link to="https://twitter.com" className="text-lg font-normal text-gray-100 mx-2"><abbr title="twitter"><i className="fab fa-twitter"></i></abbr></Link>
              </li>
              <li>
                <Link to="https://facebook.com" className="text-lg font-normal text-gray-100 mx-2"><abbr title="facebook"><i className="fab fa-facebook-f"></i></abbr></Link>
              </li>
              <li>
                <Link to="https://linkedin.com" className="text-lg font-normal text-gray-100 mx-2"><abbr title="linkedin"><i className="fab fa-linkedin-in"></i></abbr></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className=' text-center pt-4 text-[14px] lg:text-[16px] '>© 2024 Nourish Naturals</p>
    </div>
  )
}

export default Footer