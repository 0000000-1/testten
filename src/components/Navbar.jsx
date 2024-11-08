import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'


const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)
    const toggle = () => {
        setisOpen(!isOpen)
    }

    return (
        <header className='p-2 z-[4] bg-gray-100 sticky top-0 w-full h-full'>
            <div className='flex gap-4 justify-between items-center py-2 px-8 '>
                <span className="md:hidden" onClick={toggle} >III</span>
                <div className={`md:hidden absolute top-0 left-0 w-full`} >
                    <Sidebar isOpen={isOpen}  setisOpen={setisOpen}/>
                </div>
                <a href="/" > Nourish Naturals</a>
                <div className='flex justify-between md:justify-evenly'>
                    <ul className='sm:hidden md:flex flex gap-6 items-center md:pl-4 md:pr-4'>
                        <li><a href="/">HOME</a></li>
                        <li className='shop'><Link to="/products">PRODUCTS</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </header>
    )
}

export default Navbar