import React from 'react'
import productData from '../assets/productApi'
import { Link } from 'react-router-dom'


const SeasonalFruits = () => {

    let prodata = productData
    return (
        <div>
            <h3 className='text-[3rem] text-center'>Seasonal Fruits</h3>
            <div className='flex gap-8 justify-evenly'>
                <div className=' grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-8 '>
                    {prodata[1].items.map((item) => (
                        <>
                            <Link to={`/products/${item.slug}`}>
                                <div className='img2 relative h-[250px] w-[250px] overflow-hidden'>
                                    <img src={item.image} className='img21 h-full w-full object-contain' alt="more" />
                                </div>
                                <div className='flex flex-col gap-2 py-4'>
                                    <h2>{item.name}</h2>
                                    <p className='text-[.8rem]'>{item.detail}</p>
                                    <p>{item.price}</p>
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default SeasonalFruits