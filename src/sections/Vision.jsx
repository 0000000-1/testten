import React from 'react'
import { Link } from 'react-router-dom'
import image1 from "../assets/Video_and_Ref/rice-field-5530707_1280.jpg"

const Vision = () => {
  return (
    <div className='bbsCard'>
      <div className='h-[400px] w-full absolute z-[-1]'>
        <img src={image1} className='h-full w-full object-cover ' alt="bgforbutton" />
      </div>
      <div className='mobile:items-center text-center flex flex-col justify-center relative before:absolute before:z-[-1] before:h-[400px] before:w-full h-[400px] w-full items-center content before:opacity-60 before:bg-black text-gray-100 p-4' >
        <h1 className='font-[500] text-[2rem] pb-4'>Vision</h1>
        <p className='md:w-[80%] pb-4'>    Under Nourish Naturals, small groups of women farmers of the village have been formed, under which they are trying to improve the income of women. The aim of Nourish Naturals is to empower women as well as improve society, livelihood and education, the credit for which goes to the “Malyaarth Foundation”.
        </p>
        <button className=' px-4 my-2 py-2 bg-green-800 hover:bg-green-900'>
          <Link to='/contactpage'>Get in touch</Link>
        </button>
      </div>
    </div>
  )
}

export default Vision