import React from 'react';
import './behindhero.css';
import { FaWhatsapp } from 'react-icons/fa';

const Behindhero = () => {
  return (
    <div className="mainbehindhero">

   
    <div className="navigation-bar">
    <button className="nav-button">Why Us</button>
    <button className="nav-button">Reviews</button>
    <button className="nav-button">Fees</button>
    <button className="nav-button">Gallery</button>
    </div>
    <div className="whatsapp-contact">
   
      <span className='whatsapp'>Have a Query?</span>
      <FaWhatsapp size={30} color="#25D366" />
    </div>
   
    </div>
  )
}

export default Behindhero