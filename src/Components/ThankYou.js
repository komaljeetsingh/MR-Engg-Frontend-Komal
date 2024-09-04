// src/components/ThankYou.js
import React from 'react';
import './ThankYou.css';  // Import the CSS file

const ThankYou = () => {
  return (
    <div className="thankyou-container">
      <div className="thankyou-content">
        <h1 className="thankyou-title">THANK YOU!</h1>
        <p className="thankyou-message">Thanks for getting in touch! We appreciate you contacting us. We will get back to you shortly.</p>
        <i className="fa fa-check thankyou-icon"></i>
      </div>
    </div>
  );
};

export default ThankYou;
