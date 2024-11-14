import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import productData from '../assets/productApi'
import { useParams,} from 'react-router-dom';
import Footer from '../components/Footer';

const Details = () => {
    let {slug} = useParams();
    const [detail,setdetail] = useState([]);
  
    useEffect(()=>{
        const findDetail  = productData[0].items.filter(productData => productData.slug === slug)
        if(findDetail.length >0 ){
          setdetail(findDetail[0])
        }else{
          window.location.href = "/"
        }
        
      },{slug})
    
        return (

        <div className=''>
            <Navbar />
            <div className='m-8 sm:h-full flex flex-col items-center gap-6'>
                <h2 className='text-3xl w-full text-center mt-6 border-b pb-6 '>PRODUCT DETAIL</h2>
                <div className='flex flex-wrap justify-evenly w-full mt-6'>
                 <div className='sm:h-[300px] sm:w-[300px] md:h-[440px] md:w-[440px] lg:h-[600px] lg:w-[600px]'>
                        <img src={detail.image}  alt='' className='h-full w-full'/>
                    </div>
                    <div className='flex sm:justify-center sm:flex-col gap-5 sm:h-[300px] sm:w-[300px] md:justify-start md:py-[4rem] md:h-[400px] md:w-[440px] '>
                        <h1 className='text-4xl uppercase font-bold'>{detail.name}</h1>
                        <p>{detail.detail}</p>
                        <p className='font-bold text-3xl'>${detail.price}</p>
                        <div className='flex gap-5'>
                            <div className='flex gap-2 justify-center items-center'>
                                <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' >-</button>
                                <span className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>1</span>
                                <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' >+</button>
                            </div>
                            <button className='bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <Footer/>
            </div>
        </div>
    )
}

export default Details