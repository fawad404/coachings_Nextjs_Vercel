import React from 'react';
import './navbarsite.css';
// import bg from './images/backgroundhero.png';
// import cr1 from './images/1.png';
// import cr2 from './images/2.png';
// import cr3 from './images/4.png';
const Navbarsite = () => {
  return (
    <div className="container">
      <div className="left-section">
        <img src='/1.png' alt="" className='leftsecimg' />
        <h1 className="main-text">Dhyeya IAS</h1>
        <p className="sub-text">2AB, Second Floor, Pusa Road Metro Pillar Number 174, Near Karol Bagh, New Delhi, Delhi 110005</p>
        <div className="rating">
          <span>⭐⭐⭐⭐⭐</span>
          <span>4.7</span>
        </div>
        <div className="buttons">
          <button className="btnhero">Map Location</button>
          <button className="btnhero">Offers %</button>
        </div>
        <input type="text" placeholder="Call +92 332578581375823" className="input-field" />
      </div>
      <div className="right-section">
        <div className="card">
          <div className="card-image" >
            <img src='/2.png' className='crimg' alt="" />
          </div>
          <h2 className="card-title">IAS BABA</h2>
          <p className="card-location">New Delhi, Rajinder Nagar</p>
          <div className="card-info">
            <span>₹ 65 K - ₹ 1.4 L</span>
            <span>48 Reviews</span>
          </div>
          <button className="card-btn">+ Reviews</button>
        </div>
        <div className="card">
          <div className="card-image">
          <img src='/4.png' className='crimg' alt="" />
          </div>
          <h2 className="card-title">Analyst IAS</h2>
          <p className="card-location">New Delhi, Rajinder Nagar</p>
          <div className="card-info">
            <span>₹ 70 K - ₹ 1.5 L</span>
            <span>36 Reviews</span>
          </div>
          <button className="card-btn">+ Reviews</button>
        </div>
        <div className="card">
          <div className="card-image">
          <img src='/1.png' className='crimg' alt="" />
          </div>
          <h2 className="card-title">Vision IAS</h2>
          <p className="card-location">New Delhi, Rajinder Nagar</p>
          <div className="card-info">
            <span>₹ 60 K - ₹ 1.3 L</span>
            <span>50 Reviews</span>
          </div>
          <button className="card-btn">+ Reviews</button>
        </div>
        <div className="card">
          <div className="card-image" >
          <img src='/backgroundhero.png' className='crimg' alt="" />
          </div>
          <h2 className="card-title">Vajiram & Ravi</h2>
          <p className="card-location">New Delhi, Rajinder Nagar</p>
          <div className="card-info">
            <span>₹ 75 K - ₹ 1.6 L</span>
            <span>40 Reviews</span>
          </div>
          <button className="card-btn">+ Reviews</button>
        </div>
      </div>
    </div>
  );
};

export default Navbarsite;
