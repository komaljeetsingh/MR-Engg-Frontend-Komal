import React from 'react';
import './Products.css';
import Pdf from '../image/new.pdf';
import { Link } from 'react-router-dom';
import Product from './Data.js'

const Products = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Pdf;
    link.download = 'catalogue.pdf';
    link.click();
  };

  return (
    <div>
      <div className='products container'>
        <h1>Explore Our Full Range of Products</h1>
        <p>All products are meticulously crafted by our expert team in our state-of-the-art facility in India.</p>
        <button className='download-catalogue' onClick={handleDownload}>
          Download Catalogue
        </button>
        <div className='products-main row gap-3 mx-auto justify-content-center'>
          {/* Apply gap between cards */}
          {Product.map((e, index) => (
            <div
              key={index}
              className='shadow col-12 col-md-6 col-lg-4 col-xl-3 mb-4'
            >
              <Link to={`/product/${e.id}`} style={{ textDecoration: 'none' }}>
                <img
                  src={e.img}
                  alt='product/image'
                  className='img-fluid'
                />
                <h2>{e.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
