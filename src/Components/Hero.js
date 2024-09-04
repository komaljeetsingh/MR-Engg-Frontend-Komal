import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import './Hero.css';
import img from '../image/operation.png';
const Hero = () => {
  return (
    <div className='container   ' id='operation_div'>
      <div className=' row d-flex  mr_flex'>
        <div className='before-header-content  col-12 col-md-6'>
          <h1 className='hero_section' id='hero_para'>
            Medical Gas Pipeline Specialists{' '}
            {/* <span style={{ color: '#2EA6F6' }}>   </span> */}
          </h1>
          <p className='content-p'>
          To be best performing and leading Manufacturer, Supplier, Service Provider and Technology Consultant of Medical Gas Pipe Line System (MGPS) Company in the world as determined by our customers, employees, suppliers and the communities in which we operate.
          </p>
          <Link to='/products'>
            <button>View all products</button>
          </Link>
        </div>
        <div className='before-header-img col-12 col-md-6'>
          <img className='mb-4 ' id='img_operation' src={img} alt='img/photo' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
