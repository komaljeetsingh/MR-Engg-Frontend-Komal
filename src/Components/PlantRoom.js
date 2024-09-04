import React from 'react';
import './PlantRoom.css';
import img1 from "../image/plantroom.jpg"
import { Link } from 'react-router-dom';

const PlantRoom = () => {
  return (
    <div className='container '>
      <div className='Plant-Room row'>
        <div className='Plant-Room-img col-12 col-md-6'>
          <img
          src={img1}
            alt='img/photo'
          />
        </div>
        <div className='Plant-Room-content col-12 col-md-6'>
          <h1>
            From Plant Room  to Patient<br />
            {/* <span style={{ color: '#2EA6F6' }}>to Patient</span> */}
          </h1>
          <p className='content-p'>
          MR Engg is a recognized leader in the medical gas pipeline industry in India, trusted by healthcare providers across the country. We offer a comprehensive range of medical equipment, including degreased copper accessories, tubes, and advanced medical pendants. Need products urgently? Our extensive inventory, with over 750,000 items, is readily available in our Indian warehouse. Our dedicated sales team is here to assist with all your queries and support your projects. Contact us today for expert assistance and timely solutions.
          </p>
          <div className='Plant-Room-check'>
            <div className='check-1'>
              <p>
                <i className='fa-solid fa-circle-check'></i>&nbsp;&nbsp;HTM
                02-01 Compliant
              </p>
              <p>
                <i className='fa-solid fa-circle-check'></i>
                &nbsp;&nbsp;Technical Drawings
              </p>
            </div>
            <div className='check-2'>
              <p>
                <i className='fa-solid fa-circle-check'></i>&nbsp;&nbsp;Global
                Shipping
              </p>
              <p>
                <i className='fa-solid fa-circle-check'></i>&nbsp;&nbsp;Customer
                Support
              </p>
            </div>
          </div>
          <Link to='/products'>
            <button> MR Engg products are manufactured solely in the India</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantRoom;
