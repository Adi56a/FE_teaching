import React from 'react'


const Navbar = () => {
  return (
    <>
    
    <div className="bg-amber-100 text-2xl flex h-[10vh] items-center justify-around">
        <div className='hover:text-red-500 hover:text-4xl cursor-pointer transition-all duration-1000'>Company</div>
        <div className="about">About</div>
        <div className="contact">Contact</div>
    </div>
    
    </>
  )
}

export default Navbar
