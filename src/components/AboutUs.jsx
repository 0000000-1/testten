import React from 'react'

const AboutUs = () => {
        return (
            <div className='bg-yellow-500 p-10'>
                <h1>about us</h1>
                <div className='flex sm:flex-col sm:items-center md:flex-row w-full gap-6 lg:gap-0' >
                    <div className='w-[25%] sm:justify-center flex'>
                        <img src={import.meta.env.BASE_URL + "/src/assets/Valley_culture_logo_black.webp"} alt="colorlogo" />
                    </div>
                    <div className='sm:w-[35%] md:w-[25%] '>
                        <ul className='sm:items-center text-[10px] lg:text-[14px] flex flex-col gap-2'>
                            <li>
                                <a href="">Search</a>
                            </li>
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="">Terms of Services</a>
                            </li>
                            <li>
                                <a href="">Shipping Policy</a>
                            </li>
                            <li>
                                <a href="">Refund Policy</a>
                            </li>
                            <li>
                                <a href="">Contact Us</a>
                            </li>
                            <li>
                                <a href="">Our Blogs</a>
                            </li>
                        </ul>
                    </div>
                    <div className='sm:items-center md: sm:text-[12px] lg:text-[14px] w-[45%] flex flex-col gap-4'>
                        <h3>About us nowaaa</h3>
                        <p>“Welcome to Nourish Naturals”</p>
                        <p>Nourish Naturals is one stop source of naturals products. Specially we will deliver the quality product from hills of Uttarakhand. 
                        </p>
                        <p>Nourish Naturals founded in 2024, we come a long way from beginning in Garhwal, Rudraprayag.  
                        </p>
                        <p>At Nourish Naturals, we uphold a simple yet profound belief: purity is the core of our brand spirit. Committed to delivering products that reflect the true pahad essence, we prioritize the highest standards of quality and safety. From the majestic peaks of the pahad to your doorstep, we assure purity, excellence, and safety in all our offerings.
                        </p>

                    </div>
                </div>
                    <p className=' text-center pt-4 text-[14px] lg:text-[16px] '>© 2024 Nourish Naturals</p>
            </div>
        )
    }
    
    
  
export default AboutUs