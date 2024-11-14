import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import productData from '../assets/productApi'
import SeasonalFruits from '../components/SeasonalFruits'
import HandmadeCraft from '../components/HandmadeCraft'
import PahadiDal from '../components/PahadiDal'

const Products = () => {
  let data = productData

  const productspan = data[0].items
  
  return (
    <> 
      <Navbar />
      <div className='flex justify-center my-8 p-8 flex-col'>
        <h1 className='text-center text-4xl border-b pb-6'>Products</h1>
        <div className='box flex flex-wrap '>
          <HandmadeCraft data={productspan}/>
        </div>
        <div>
          <SeasonalFruits />
        </div>
        <div>
          <PahadiDal/>
        </div>
      </div>
        <Footer />
    </>
  )
}

export default Products