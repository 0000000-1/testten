import React from 'react'
import introvideo from "../assets/Video_and_Ref/istockphoto-2152876030-640.mp4"

const Herosection = () => {
    return (
        <div className='flex gap-4 flex-col flex flex-col h-full items-center'>
            <div className=' h-screen w-full '>
                <div className='absolute z-[-2] h-full w-full '>
                    <video src={introvideo} className='h-screen w-full object-cover' data-type='mp4' autoPlay loop muted playsInline></video>
                </div>
                <div className='h-full flex-col before:absolute before:bg-black before:z-[-2] before:h-full before:w-full before:opacity-[.5] w-full flex justify-center items-center text-center'>
                    <h1 className='text-gray-100 text-5xl font-[400] sm:text-4xl lg:text-6xl '>Nourish Naturals</h1>
                    <p className='text-gray-100 m-4'>
                        Our food products are grown in the hilly areas of Uttarakhand, prepared using natural and traditional methods. Everything is natural, no chemicals or pesticides are used, and only natural manure is used. Due to the Himalayan climate our pulses and every product is different from other region products in taste and quality.
                    </p>
                <button className='py-4 px-5 sm:py-2 sm:px-3 font-[700] text-sm text-white bg-green-900'>SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Herosection