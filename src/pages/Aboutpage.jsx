import React from 'react'
import { Link } from 'react-router-dom'

const Aboutpage = () => {
  return (
    <div className='flex flex-col h-full items-center py-6'>
            <h3 className=' text-[4rem] m-4'>About us </h3>
            <div className='flex justify-center items-center sm:flex-wrap justify-evenly'>
                <div className='h-[400px] w-[320px]'>
                    <img src="./src/assets/Product_Image_and_Ref/Handmade_craft_3.jpeg" className='img21 h-full w-full object-contain' alt="" />
                </div>
                <div className='sm:items-center sm:w-[85%] md: justify-evenly items-center sm:text-[12px] lg:text-[14px] md:w-[45%] flex flex-col gap-4'>
                    <h1 className='text-3xl my-4'>“Welcome to Nourish Naturals”</h1>
                    <p className='text-[1rem]' >Nourish Naturals is one stop source of naturals products. Specially we will deliver the quality product from hills of Uttarakhand.
                    </p>
                    <p className='text-[1rem]'>Nourish Naturals founded in 2024, we come a long way from beginning in Garhwal, Rudraprayag.
                    </p>
                    <p className='text-[1rem]'>At Nourish Naturals, we uphold a simple yet profound belief: purity is the core of our brand spirit. Committed to delivering products that reflect the true pahad essence, we prioritize the highest standards of quality and safety. From the majestic peaks of the pahad to your doorstep, we assure purity, excellence, and safety in all our offerings.
                    </p>
                <Link to='/aboutpage'className='bg-gray-100 py-2 px-4'  >more on us!</Link>
                </div>
            </div>
        </div>
      )
}

export default Aboutpage