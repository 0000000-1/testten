import React, {useState } from 'react'
import introvideo1 from "../assets/Video_and_Ref/istockphoto-2152876030-640.mp4"
import introvideo2 from "../assets/Video_and_Ref/istockphoto-1164177646-640_adpp_is.mp4"
import { Link } from 'react-router-dom'

const Herosection = () => {

    const [first, setfirst] = useState(0)
    const videos =[introvideo2,introvideo1]

    const handlevideoend =() => {
        setfirst((prev) => prev + 1 )
        if (first >= videos.length -1  ){      
            setfirst(0)
        }
        
    }

    return (
        <div className='flex gap-4 flex-col flex flex-col h-full items-center'>
            <div className=' h-screen w-full '>
                <div className='absolute z-[-2] h-full w-full before:absolute before:bg-black before:z-[2] before:h-full before:w-full before:opacity-[.5]'>
                <video src={videos[first]} id='video' className='h-screen w-full object-cover' data-type='mp4' autoPlay muted onEnded={handlevideoend}></video>
                </div>
                <div className='h-full flex-col w-full  flex justify-center items-center text-center'>
                    <h1 className='text-4xl font-bold text-gray-200 text-center mb-4 sm:text-4xl lg:text-6xl '>Nourish Naturals</h1>
                    <p className='text-lg font-normal text-gray-200 m-4'>
                        Our food products are grown in the hilly areas of Uttarakhand, prepared using natural and traditional methods. Everything is natural, no chemicals or pesticides are used, and only natural manure is used. Due to the Himalayan climate our pulses and every product is different from other region products in taste and quality.
                    </p>
                <button className='text-white font-bold py-2 px-4 ml-4 mb-4 sm:py-2 sm:px-3 bg-green-800 hover:bg-green-900'>
                    <Link to='/products'>
                    SHOP NOW
                    </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Herosection