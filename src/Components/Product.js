import React, { useEffect, useState } from 'react';
import './Product.css';
import tourData from './Data.js'
import { useParams } from 'react-router-dom';

const Product = () => {

  const {id} =useParams();
    const [single, setSingle] = useState({});

    useEffect(()=>{
        const product = tourData.find(item => item.id === parseInt(id))
        setSingle(product);
    console.log(product);

    })
  return (
    <div>
      <div className='product container'>
        <div className='product-main row'>
          <div className='product-image col-12 col-md-5'>
            <img
              src={single.img}
              alt='product-image'
              className='single-img'
            />
          </div>
          <div className='product-details col-12 col-md-7'>
            <h2 className='product-details-h2'>{single.name}</h2>
            <p className='product-details-p  '>
              {single.Description}
            </p>
            <button className='product-btn1'> Documentation</button>
            <a href='/form'>
              <button className='product-btn2'>Request Quote</button>
            </a>
          </div>
        </div>
        {/* <div className='accordion' id='accordionPanelsStayOpenExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='panelsStayOpen-headingOne'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#panelsStayOpen-collapseOne'
                aria-expanded='true'
                aria-controls='panelsStayOpen-collapseOne'
              >
                Feature 1
              </button>
            </h2>
            <div
              id='panelsStayOpen-collapseOne'
              className='accordion-collapse collapse show'
              aria-labelledby='panelsStayOpen-headingOne'
            >
              <div className='accordion-body text-start'>
                {single.features1}
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='panelsStayOpen-headingOne1'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#panelsStayOpen-collapseOne1'
                aria-expanded='true'
                aria-controls='panelsStayOpen-collapseOne'
              >
                Feature 2
              </button>
            </h2>
            <div
              id='panelsStayOpen-collapseOne1'
              className='accordion-collapse collapse show'
              aria-labelledby='panelsStayOpen-headingOne1'
            >
              <div className='accordion-body text-start'>
                {single.features2}
              </div>
            </div>
          </div>
        </div> */}
        <div className='related container'>
          <h2 className='fw-bolder '>Related products</h2>
          <div className='related-product row'>
            <div className='col-12 col-md-6 col-lg-3 rounded' id='border_new'>
              <img
                src='https://www.precisionuk.co.uk/wp-content/uploads/2023/05/retractablependant-400x400.jpg'
                alt=''
                className='related-img'
              />
              <h2 className='text-black'>Medical Pendant - Retractable</h2>
            </div>


            <div className='col-12 col-md-6 col-lg-3  rounded' id='border_new'>
              <img
                src='https://www.precisionuk.co.uk/wp-content/uploads/2022/08/BS-outletsNOCE-3-400x284.png'
                alt=''
                className='related-img'
              />
              <h2 className='text-black '>Medical Gas Outlets</h2>
            </div>


            <div className='col-12 col-md-6 col-lg-3 rounded' id='border_new'>
              <img
                src='https://www.precisionuk.co.uk/wp-content/uploads/2023/05/pendant1-400x400.jpg'
                alt=''
                className='related-img'
              />
              <h2 className='text-black'>Medical Pendant - Single ARM</h2>
            </div>


            <div className='col-12 col-md-6 col-lg-3 rounded' id='border_new'>
              <img
                src='https://www.precisionuk.co.uk/wp-content/uploads/2023/05/Bedhead-Unit-White-400x267.jpg'
                alt=''
                className='related-img'
              />
              <h2 className='text-black'>Bedhead Unit</h2>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
