import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen,setisOpen}) => {
  
  // const [isbarOpen, setisbarOpen] = useState(false)
  const toggle = () => {
      setisOpen(!isOpen)
  }
    return (
    <div className={`${isOpen === true ? "flex" : "hidden"} w-full h-full `} >

      <div className='sidebar-links flex gap-6 flex-col items-center bg-gray-50 w-full h-full p-6'>
        <Link to='/' >Home</Link>
        <Link to='/products' > Products </Link>
        <Link to='/contactpage'> Contact </Link>
        <Link to='/aboutpage'> About </Link>
        <p onClick={toggle} > Close </p>
      </div>
   </div>
  )
}

export default Sidebar