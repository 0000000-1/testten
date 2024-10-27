import React from 'react'

const Navbar = () => {
  return (  
      <header className='absolute w-full h-full'>
      <h1>navbar</h1>
    <div className='flex gap-4 justify-between items-center py-2 px-8 '>
        <div className='md:hidden' >
            <span>III</span>
            <div><a href="/">Home</a></div>
        </div>
        {/* <span className={`sm:hidden md:flex ${searchOpen === true ? "hidden" : console.log("true")}`}  onClick={searchToggle} >Search</span> */}
        {/* <Search searchopen={searchOpen} /> */}
        <div className='flex justify-between md:justify-evenly'>
            <ul className='sm:hidden md:flex flex gap-6 items-center md:pl-4 md:pr-4'>
                <li><a href="/">HOME</a></li>
                <li className='shop'><a href="">SHOP</a>
                </li>
            </ul>
            <img src={import.meta.env.BASE_URL + "/src/assets/logoColor.webp"} alt="logo" className='px-8' />
            <ul className='sm:hidden md:flex gap-0 flex flex-col md:flex-row md:gap-2 lg:gap-2 lg:flex-row justify-center items-center'>
                <li className='md:hidden lg:flex' ><a href="">GIFTING</a></li>
                <li><a href="">BEST SELLER</a></li>
                <li><a href="">OUR STORY</a></li>
            </ul>
        </div>
        <div className='gap-4 flex'>
            {/* <span>login</span> */}
            {/* <span><a href={import.meta.env.BASE_URL + "/auth"}>login</a></span> */}
            <button className="cart-btn">
                Cart
            </button>

        </div>
    </div>

</header>
  )
}

export default Navbar