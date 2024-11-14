import React from 'react'
import Navbar from '../components/Navbar'
import OurProducts from '../sections/OurProducts'
import Footer from '../components/Footer'
import Vision from '../sections/Vision'
import Customertestimonial from '../sections/Customertestimonial'
import Herosection from '../sections/Herosection'
import AboutUs from '../sections/AboutUs'


const Home = () => {
  return (
    <>
    <section>

      <Navbar />
      <Herosection />
      <AboutUs />
      <OurProducts />
      <Vision />
      <Customertestimonial />
      <Footer />
    </section>
    </>
  )
}

export default Home