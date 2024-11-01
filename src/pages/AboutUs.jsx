import React from 'react'

const AboutUs = () => {
    return (
        <div className='flex flex-col h-full items-center py-6'>
            <h3 className=' text-[4rem] m-4'>About us </h3>
            <div className='flex justify-center items-center sm:flex-wrap justify-evenly'>

                <div className='h-[400px] w-[350px]'>
                    <img src="./src/assets/Product_Image_and_Ref/Handmade craft (3).jpeg" className='img21 h-full w-full object-contain' alt="" />
                </div>
                <div className='sm:items-center md: justify-center sm:text-[12px] lg:text-[14px] w-[45%] flex flex-col gap-4'>
                    <p>“Welcome to Nourish Naturals”</p>
                    <p>Nourish Naturals is one stop source of naturals products. Specially we will deliver the quality product from hills of Uttarakhand.
                    </p>
                    <p>Nourish Naturals founded in 2024, we come a long way from beginning in Garhwal, Rudraprayag.
                    </p>
                    <p>At Nourish Naturals, we uphold a simple yet profound belief: purity is the core of our brand spirit. Committed to delivering products that reflect the true pahad essence, we prioritize the highest standards of quality and safety. From the majestic peaks of the pahad to your doorstep, we assure purity, excellence, and safety in all our offerings.
                    </p>
                </div>
            </div>
        </div>
    )
}



export default AboutUs