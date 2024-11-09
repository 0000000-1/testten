import React from 'react'
import { Link } from 'react-router-dom'
import image1 from "../assets/Product_Image_and_Ref/Handmade_craft_1.jpeg"
import image2 from "../assets/Product_Image_and_Ref/Handmade_craft_2.jpeg"
import image3 from "../assets/Product_Image_and_Ref/Handmade_craft_3.jpeg"
import image4 from "../assets/Product_Image_and_Ref/Handmade_craft_4.jpeg"

const OurProducts = () => {
  return (
    <div className="container mx-auto p-8 pt-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-700">Our Products</h2>

      <div className="flex flex-wrap justify-center -mx-4">

        <div className="w-full md:w-1/3 xl:w-1/3 px-4 mb-8">
          <div className="bg-white shadow-md">
            <img
              src={image1}
              alt="Product Image"
              className="w-full h-64 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-2xl font-bold mb-2 px-4">Product 1</h3>
            <p className="text-lg font-normal text-gray-600 mb-4 px-4">
              Description of Product 1.
            </p>
            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 ml-4 mb-4">
              <Link to='/products'>
              Buy Now
              </Link>
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3 xl:w-1/3 px-4 mb-8">
          <div className="bg-white shadow-md">
            <img
              src={image2}
              alt="Product Image"
              className="w-full h-64 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-2xl font-bold mb-2 px-4">Product 2</h3>
            <p className="text-lg font-normal text-gray-600 mb-4 px-4">
              Description of Product 2.
            </p>
            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 ml-4 mb-4">
              <Link to='/products'>
              Buy Now
              </Link>
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3 xl:w-1/3 px-4 mb-8">
          <div className="bg-white shadow-md">
            <img
              src={image3}
              alt="Product Image"
              className="w-full h-64 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-2xl font-bold mb-2 px-4">Product 3</h3>
            <p className="text-lg font-normal text-gray-600 mb-4 px-4">
              Description of Product 3.
            </p>
            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 ml-4 mb-4">
              <Link to='/products'>
              Buy Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default OurProducts