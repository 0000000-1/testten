import React from 'react'
import Contactus from '../sections/Contactus'

const Footer = () => {
  return (
    <div className='bg-orange-200 p-10'>
      <div className='flex justify-center sm:items-center sm:flex-col md:flex-row w-full gap-6 lg:gap-0' >
        <div className=''>
        <Contactus />
        </div>
        <div className='w-[25%] sm:justify-center flex'>
          <img src={import.meta.env.BASE_URL + "/src/assets/Valley_culture_logo_black.webp"} alt=" Nourish Naturals" />
        </div>
        <div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className=''>
            <ul className='sm:items-center text-[10px] lg:text-[14px] flex  gap-4'>

              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Services</a>
              </li>
              <li>
                <a href="">Shipping</a>
              </li>
              <li>
                <a href="">Return, Exchange, and Refund Policy</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Our Blogs</a>
              </li>
            </ul>
          </div>
          <div className=''>
            <ul className='sm:items-center justify-center text-[10px] lg:text-[14px] flex  gap-4'>
              <li>
                <a href="">youtube</a>
              </li>
              <li>
                <a href="">instagram</a>
              </li>
              <li>
                <a href="">facebook</a>
              </li>
              <li>
                <a href="">linked in</a>
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