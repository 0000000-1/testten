import React from 'react'

const Vision = () => {
    return (       
    <div className='bbsCard'>
    <div className='h-[400px] w-full absolute z-[-1]'>
      <img src="./src/assets/Video_and_Ref/rice-field-5530707_1280.jpg" className='h-full w-full object-cover ' alt="bgforbutton" />
    </div>
    <div className='mobile:items-center text-center flex flex-col justify-center relative before:absolute before:z-[-1] before:h-[400px] before:w-full h-[400px] w-full items-center content before:opacity-60 before:bg-black text-gray-100' >
      <h1 className='font-[500] text-[2rem]'>Vision</h1>
      <p>    Under Nourish Naturals, small groups of women farmers of the village have been formed, under which they are trying to improve the income of women. The aim of Nourish Naturals is to empower women as well as improve society, livelihood and education, the credit for which goes to the “Malyaarth Foundation”.
      </p>
      <button className='bbsCard-btn px-4 my-2 py-2 bg-green-900'>Get in touch</button>
    </div>
  </div>
    )
}

export default Vision