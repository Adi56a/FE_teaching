import React from 'react'
import '../footer.css'

const Footer = (props) => {
  return (
    <>
     
     <div className="footer">
        <div className="footer_address">{props.address}</div>
        <div className="links">Quick Links</div>
     </div>
 

    </>
  )
}

export default Footer
