import React from 'react'
import productData from '../assets/productApi'
import { Link } from 'react-router-dom'

const PahadiDal = () => {
    let prodata = productData

    return (
        <div className='flex flex-col w-full gap-8 '>
            <h3 className='text-[3rem] text-center'>Pahadi Dal</h3>
            <div className='flex gap-8 justify-evenly'>
                <div className=' grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-8 '>
                    {prodata[2].items.map((item) => (
                        <>
                            <Link to={`/products/${item.slug}`}>

                                <div className="w-full px-4 mb-8">
                                    <div className="bg-white shadow-md">
                                        <img
                                            src={item.image}
                                            alt="Product Image"
                                            className="w-full h-64 object-cover mb-4"
                                        />
                                        <h3 className="text-2xl font-bold mb-2 px-4 uppercase">{item.name}</h3>
                                        <p className="text-lg font-normal text-gray-600 mb-4 px-4">
                                            {item.detail}
                                        </p>
                                        <div className='flex justify-between items-center'>
                                            <p className="text-lg font-normal text-gray-600 mb-4 px-4">
                                                {item.price}
                                            </p>
                                            <button className="bg-indigo-500 hover:bg-indigo-600 mb-4 text-white font-bold py-2 px-4 ml-4 mr-4">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </Link>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PahadiDal