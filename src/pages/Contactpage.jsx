import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contactpage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="container mx-auto p-8 pt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2" for="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full p-2 shadow-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full p-2 shadow-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2" for="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block w-full p-2 shadow-md"
                  />
                </div>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 ">
                  Send Message
                </button>
              </form>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-lg font-normal text-gray-600 mb-4">
                Phone: 555-555-5555
              </p>
              <p className="text-lg font-normal text-gray-600 mb-4">
                Email: info@example.com
              </p>
              <p className="text-lg font-normal text-gray-600 mb-4">
              Ghariyana, Post office Jakhal,, District – Rudraprayag, Uttrakhand, 246475
              </p>
              <div className="flex justify-center mb-4">
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
              </div>
            </div>
          </div>
        </div>

      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Contactpage