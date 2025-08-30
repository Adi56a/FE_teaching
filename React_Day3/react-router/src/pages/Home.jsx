import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

const Home = () => {

 const navigate = useNavigate();


  const goToContact = () => {
    
       navigate('/contact')
  }
  return (
    <>
    
       <Header />
     <div className='bg-sky-300 h-[100vh] flex items-center justify-center flex-col'>

           <h1 className='text-6xl'>Home Page </h1>

           <button  className='bg-red-200' onClick={goToContact}>Contact Us</button>

     </div>
    
    </>
  )
}

export default Home
