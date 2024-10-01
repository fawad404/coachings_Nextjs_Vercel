import React from 'react';
import './map.css';

const Mapco = () => {
  return (
    <div className="map-container">
         <h1 className='h1map'>Dhyeya IAS Location</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19746.96388971153!2d77.1757400052574!3d28.64111619288663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1726840907329!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
       
      <div className="map-overlay">
       <h3>28.645950827027256, 77.18216317364215</h3>
        <p>25B 3rd Floor, Pusa Rd, New Delhi, Delhi 110005, India</p>
        <p>Coordinates: 28°38 36.2 N 77°10 8.9 E</p>
        <button className="directions-btn">Directions</button>
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className='largermap'>View larger map</a>
      </div>
    </div>
  );
};

export default Mapco;
