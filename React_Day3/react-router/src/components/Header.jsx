import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <> 
    
     
     <div className='bg-amber-300 h-[10vh] flex items-center justify-around'>
        <h1>  <Link to='/contact'>Contact</Link>  </h1>

      

        <h1> Information</h1>
     </div>
    
    </>
  )
}

export default Header
