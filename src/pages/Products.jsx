import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import productData from '../assets/productApi'
import SeasonalFruits from '../components/SeasonalFruits'
import HandmadeCraft from '../components/HandmadeCraft'
import Details from './Details'

const Products = () => {
  let data = productData

  const productspan = data[0].items
  // console.log(productspan);
  
  return (
    <> 
      <Navbar />
      <div className='flex justify-center flex-col'>
        <h1 className='text-center'>Products</h1>
        <div className='box flex flex-wrap '>
          <HandmadeCraft data={productspan}/>
        </div>
        <div>
          <SeasonalFruits />
        </div>
        <div className='box flex flex-wrap '>
          <HandmadeCraft data={productspan}/>
        </div>
        <div className='box flex flex-wrap '>
          <HandmadeCraft data={productspan}/>
        </div>
        <div className='box flex flex-wrap '>
          <HandmadeCraft data={productspan}/>
        </div>
      </div>
        <Footer />
    </>
  )
}

export default Products