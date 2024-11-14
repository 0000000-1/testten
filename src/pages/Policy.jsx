import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Policy = () => {
    return (
        <div>
            <div><Navbar /></div>
            <div className='my-6 flex p-8 flex-col'>
                <h3 className="text-4xl text-center font-bold mb-4 border-b pb-4">POLICY</h3>
                <div className='flex flex-wrap p-8'>
                    <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
                        <h3 className="text-3xl font-bold mb-4">About Shipping
                        </h3>
                        <p className="text-lg font-normal text-gray-600 mb-4">
                            We currently ship only within India. All orders are processed within 3-4 business days. High order volumes may cause delays; if significant, we will contact you via email or telephone. A flat shipping charge of Rs. 120 applies to all orders. Orders above Rs. 2000 qualify for free delivery.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
                        <h3 className="text-3xl font-bold mb-8">
                            Return, Exchange, and Refund Policy

                        </h3>
                        <p className="text-lg font-normal text-gray-600 mb-4">
                            Our objective is to ensure the best user experience to our customers starting from placing an order to initiating a cancellation, return, replace, and/ or refund. While transacting on  Nourish Naturals you can expect a hassle-free experience in returning, replacing, or cancelling the Products that you have ordered/ booked and can rely on us as your preferred shopping destination.</p>
                        <ul>
                            <li className="text-lg font-normal text-gray-600 mb-2">
                                You may initiate refund or replacement of Products within 24 hours after shipment received by the customer.

                            </li>
                            <li className="text-lg font-normal text-gray-600 mb-2">
                                Our packages come with tamper proof packaging. Do not accept packages where the seal is tampered and/or outer package is damaged. Acceptance of a tampered or a damaged package will automatically disqualify you from any return claims.

                            </li>
                            <li className="text-lg font-normal text-gray-600 mb-2">
                                Short video can be captured by you, while unboxing the delivered package. (This will enable us for hassle-free and fast refund or replacement in case of defected/ wrong item dispatched)
                            </li>
                            <li className="text-lg font-normal text-gray-600 mb-2">
                                If you have received a defective, spoiled, Expired, broken, or incorrect product, we suggest that you immediately email us.

                            </li>
                            <li className="text-lg font-normal text-gray-600 mb-2">
                                Refund will be credited to the original source of payment or as per the bank details provided by the customer

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default Policy