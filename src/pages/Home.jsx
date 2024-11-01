import React from 'react'
import AboutUs from './AboutUs'
import Navbar from '../components/Navbar'
import OurProducts from '../sections/OurProducts'
import Footer from '../components/Footer'
import Vision from '../sections/Vision'
import Customertestimonial from '../sections/Customertestimonial'
import Contactus from '../sections/Contactus'
import Herosection from '../sections/Herosection'


const Home = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <AboutUs />
      <OurProducts />
      <Vision />
      <Customertestimonial />
      <Footer />
    </>
  )
}

export default Home