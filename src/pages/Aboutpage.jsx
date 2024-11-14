import React from 'react'
import image from '../assets/Product_Image_and_Ref/Seasonal_Fruits_pahadi_Nimbu.webp'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Aboutpage = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-8 pt-16">
                <h2 className="text-5xl font-bold text-center mb-8">Who We Are</h2>

                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
                        <img
                            src={image}
                            alt="Company Image"
                            className="w-full h-80 object-cover mb-4 rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
                        <h3 className="text-3xl font-bold mb-4">Our Story</h3>
                        <p className="text-lg font-normal text-gray-600 mb-4">
                            We're a team of passionate individuals dedicated to delivering exceptional products and services.
                        </p>
                        <p className="text-lg font-normal text-gray-600 mb-4">
                            Our journey began with a simple idea: to make a difference.
                        </p>
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 ">Learn More</button>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center -mx-4 mb-8">
                    <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
                        <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                        <p className="text-lg font-normal text-gray-600 mb-4">
                            To empower individuals and organizations through innovative solutions.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
                        <h3 className="text-3xl font-bold mb-4">Our Values</h3>
                        <ul>
                            <li className="text-lg font-normal text-gray-600 mb-2">
                                Integrity
                            </li>
                            <li className="text-lg font-normal text-gray-600 mb-2">
                                Excellence
                            </li>
                            <li className="text-lg font-normal text-gray-600 mb-2">
                                Collaboration
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
                        <h3 className="text-3xl font-bold mb-4">Our Team</h3>
                        <div className="flex flex-wrap justify-center -mx-4">
                            <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
                                <img
                                    src={image}
                                    alt="John Doe"
                                    className="w-20 h-20 rounded-full mb-2"
                                />
                                <h4 className="text-lg font-bold mb-2">John Doe</h4>
                                <p className="text-lg font-normal text-gray-600 mb-2">
                                    CEO
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
                                <img
                                    src={image}
                                    alt="Jane Smith"
                                    className="w-20 h-20 rounded-full mb-2"
                                />
                                <h4 className="text-lg font-bold mb-2">Jane Smith</h4>
                                <p className="text-lg font-normal text-gray-600 mb-2">
                                    CTO
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center -mx-4 mb-8">
                    <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
                        <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
                        <p className="text-lg font-normal text-gray-600 mb-4">
                            Contact us at info@example.com.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
                        <h3 className="text-3xl font-bold mb-4">Stay Connected</h3>
                        <div className="flex justify-start mb-4">
                            <a
                                href="(link unavailable)"
                                className="text-lg font-normal text-gray-600 mx-2"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="(link unavailable)"
                                className="text-lg font-normal text-gray-600 mx-2"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="(link unavailable)"
                                className="text-lg font-normal text-gray-600 mx-2"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="(link unavailable)"
                                className="text-lg font-normal text-gray-600 mx-2"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <p className="text-lg font-normal text-gray-600 mb-4">
                            Subscribe to our newsletter for updates and promotions.
                        </p>
                        <form>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2 mb-4 rounded-lg"
                            />
                            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 ">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Aboutpage