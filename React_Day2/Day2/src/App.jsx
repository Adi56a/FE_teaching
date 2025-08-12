import React, { useState } from 'react'

const App = () => {

  const [bgColor  , setBgcolor] = useState('yellow');

  
  const getRandomColor  = () => {
    const letters  =  '0123456789ABCDEF';   
    let color  = "#";
     
    for (let i  =  0 ; i < 6 ; i++){
        color += letters[Math.floor(Math.random() *16  ) ]
    }

    return color

  }


  const changeColor = () => {
    setBgcolor(getRandomColor());
  }

   



  return (
    <>
    
    <div  style={{height:'100vh'  , backgroundColor:bgColor}}                  className='flex items-center justify-center flex-col bg-amber-400  text-2xl'>
         
          <button 
          onClick={changeColor}
          className='bg-blue-300 rounded-lg '>
            Change Color
            </button>

    </div>
    
    </>
  )
}

export default App;




