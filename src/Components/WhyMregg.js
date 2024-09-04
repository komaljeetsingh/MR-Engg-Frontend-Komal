import React from 'react';
import './WhyMregg.css';
import img1 from "../image/certi1.jpg"
import img2 from "../image/certi2.jpg"
import img3 from "../image/certi3.jpg"
import img4 from "../image/certi4.jpg"

const WhyMregg = () => {
  return (
    <div className='why-mregg container'>
      <div className='why-mregg-upper row'>
        <h1 className='fw-bold'>Why MR Engg?</h1>
        <div className='text-details col-12'>
          <p>
            <span className='bold-details'>M.R. Engg Works Pvt. Ltd.</span>{' '}
            (formerly M.R. Engineering Works) is one of the leading
            manufacturers and suppliers of{' '}
            <span className='bold-details'>
              Medical Gas Pipeline Systems (MGPS)
            </span>
            . Our company has extensive technical expertise and professional
            skills in designing, developing, and delivering specialized{' '}
            <span className='bold-details'>
              Medical Gas Pipeline Systems (MGPS)
            </span>
            products for the Medical & Healthcare Domain.
          </p>
          <p>
            We undertake the design and development of{' '}
            <span className='bold-details'>MGPS</span> products for specialized
            applications, ensuring high levels of precision engineering, and
            maintaining consistent quality. Our state-of-the-art facility,
            combined with our focus on continuous improvement, enables us to
            deliver innovative and reliable{' '}
            <span className='bold-details'>MGPS</span> products. The entire
            manufacturing process is supervised by our experienced promoters who
            have accumulated vast experience over the last five decades.
          </p>
          <p>
            Our primary strength lies in providing a comprehensive range of MGPS
            products that meet the highest standards of safety and efficiency.
            We are committed to excellence in every aspect of our operations,
            from the initial design phase to final implementation, ensuring that
            our products meet the specific needs of our clients in the Medical &
            Healthcare Domain.
          </p>
          <p>
            Our specialized <span className='bold-details'>MGPS</span> products
            include a wide array of Medical Gas Pipeline Systems designed for
            various healthcare environments. It is our diverse R&D skills that
            ensure these products are consistently innovative and reliable. Our
            success in the <span className='bold-details'>MGPS</span> industry
            is a result of our unwavering commitment to quality and customer
            satisfaction.
          </p>
        </div>

        <div className='col-12 col-md-6 col-lg-3 mb-3'>
          <img
            src={img1}
            alt='certified/img'
            className='img-fluidd'
          />
        </div>
        <div className='col-12 col-md-6 col-lg-3 mb-3'>
          <img
            src={img2}
            alt='certified/img'
            className='img-fluidd'
          />
        </div>
        <div className='col-12 col-md-6 col-lg-3 mb-3'>
          <img
            src={img3}
            alt='certified/img'
            className='img-fluidd'
          />
        </div>
        <div className='col-12 col-md-6 col-lg-3 mb-3'>
          <img
            src={img4}
            alt='certified/img'
            className='img-fluidd'
          />
        </div>
      </div>
    </div>
  );
};

export default WhyMregg;
