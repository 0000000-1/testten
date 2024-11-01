import React from 'react'

const OurProducts = () => {
  return (    
  <div className=' bg-purple-50 flex justify-center items-center flex-col w-full lg:p-8 p-4'>
    <h1 className='my-6 text-[4rem] m-4 font-[500] '>Our Products</h1>
    <div className='grid h-full sm:grid-cols-2 md:grid-cols-4 w-full gap-4'>

    <div className='img2 relative h-full w-full  overflow-hidden'>
        <img src="./src/assets/Product_Image_and_Ref/Handmade craft (3).jpeg" className='img21 h-full w-full object-contain' alt="" />
        <div className='before:absolute flex flex-col justify-center items-center h-full w-full
        before:h-full before:w-full before:opacity-[30%] before:hover:duration-1000 before:hover:opacity-60 before:bg-black before:content before:object-cover 
        absolute top-0'>
          <h1 className='text-[1rem] text-white relative z-2'>HANDMADE CRAFT</h1>
        </div>
      </div>
      <div className='img2 relative h-full w-full overflow-hidden'>
        <img src="./src/assets/Product_Image_and_Ref/Handmade craft (3).jpeg" className='img21 h-full w-full object-contain ' alt="" />
        <div className='before:absolute flex flex-col justify-center items-center h-full w-full
        before:h-full before:w-full before:opacity-[30%] before:hover:duration-1000 before:hover:opacity-60 before:bg-black before:content before:object-cover 
        absolute top-0'>
          <h1 className='text-[1rem] text-white relative z-2'>PULSE (PAHADI DAAL)</h1>
        </div>
      </div>
      <div className='img2 relative h-full w-full overflow-hidden'>
        <img src="./src/assets/Product_Image_and_Ref/Mandua.webp" className='img21 h-full w-full object-cover ' alt="" />
        <div className='before:absolute flex flex-col justify-center items-center h-full w-full
        before:h-full before:w-full before:opacity-[30%] before:hover:duration-1000 before:hover:opacity-60 before:bg-black before:content before:object-cover 
        absolute top-0'>
          <h1 className='text-[1rem] text-white relative z-2'>PAHADI MILLETE</h1>
        </div>
      </div>
      <div className='img2 relative h-full w-full overflow-hidden'>
        <img src="./src/assets/Product_Image_and_Ref/Pahadi Malta.jpg" className='img21 h-full w-full object-contain ' alt="" />
        <div className='before:absolute flex flex-col justify-center items-center h-full w-full
        before:h-full before:w-full before:opacity-[30%] before:hover:duration-1000 before:hover:opacity-60 before:bg-black before:content before:object-cover 
        absolute top-0'>
          <h1 className='text-[1rem] text-white relative z-2'>SEASONAL FRUITS</h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OurProducts