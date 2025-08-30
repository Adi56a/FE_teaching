import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Contact from './pages/Contact'
import Information from './pages/Information'
import Header from './components/Header'



const App = () => {
  return (
    <>

      
             
     <Router>

      <Routes>
      
       <Route  path='/' element={<Home />} />
       <Route  path='/contact' element={<Contact />} />
       <Route  path='/info' element={<Information />} />


      </Routes>

     </Router>

    
    </>
  )
}

export default App
