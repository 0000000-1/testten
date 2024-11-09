import React from 'react'
import introvideo from "../assets/Video_and_Ref/istockphoto-2152876030-640.mp4"

const Herosection = () => {
    return (
        <div className='flex gap-4 flex-col flex flex-col h-full items-center'>
            <div className=' h-screen w-full '>
                <div className='absolute z-[-2] h-full w-full '>
                    <video src={introvideo} className='h-screen w-full object-cover' data-type='mp4' autoPlay loop muted playsInline></video>
                </div>
                <div className='h-full flex-col before:absolute before:bg-black before:z-[-2] before:h-full before:w-full before:opacity-[.5] w-full  flex justify-center items-center text-center'>
                    <h1 className='text-4xl font-bold text-gray-200 text-center mb-4 sm:text-4xl lg:text-6xl '>Nourish Naturals</h1>
                    <p className='text-lg font-normal text-gray-200 m-4'>
                        Our food products are grown in the hilly areas of Uttarakhand, prepared using natural and traditional methods. Everything is natural, no chemicals or pesticides are used, and only natural manure is used. Due to the Himalayan climate our pulses and every product is different from other region products in taste and quality.
                    </p>
                <button className='text-white font-bold py-2 px-4 ml-4 mb-4 sm:py-2 sm:px-3 bg-green-800 hover:bg-green-900'>SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Herosection