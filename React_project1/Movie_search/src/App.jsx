import React, { useState } from 'react'
import "./App.css"

const App = () => {

  const [query , setQuery] = useState("");   //For Storing user input
  const [movies , setMovies]  = useState([]); // For Storing api response
  
  
 const apiKey  = 'b289524a';

 const handleSearchChange = (event) => {
    setQuery(event.target.value)
 }
  

  
  return (
   <>
   <div className='bg-gray-800 h-auto text-white flex items-center justify-center flex-col'>
   
   <h1 className='text-5xl font-bold mb-2 '>Movie Search App</h1>

   <div className=' h-[10vh] w-[100vw] flex items-center justify-center gap-2'>
   
   <input type="text"
   placeholder='Search Movie'
   className='p-4 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500'  />


   <button className='bg-blue-400 text-white w-30 p-2 '>
    Search
   </button>

   </div>


   <div className='   h-auto bg-gray-800 w-[100vw] p-5  grid grid-cols-4 gap-5' >

    {/* card start here */}
    <div className='h-[400px] w-[350px] bg-gray-300'> 
      <img src="https://images.unsplash.com/photo-1755302436715-e08108972771?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       alt="image"
       className=' w-full h-64 object-cover rounded-2xl' />

       <div className='text-xl  font-bold flex items-center justify-center '>Movie title</div>
      
       <div className='text-xl text-gray-500 flex items-center justify-center'>Year</div>
    </div>       
    {/* card ends here  */}
   

   </div>


   </div>
   </>
  )
}

export default App

// http://www.omdbapi.com/?s=batman&apikey='b289524a'