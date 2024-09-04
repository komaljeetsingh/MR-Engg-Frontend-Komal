import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='about-us'>
          <div className='col-12 w-100'>
            <h4 className='fw-bolder'>– About us –</h4>
            <h2>Trusted Medical Gas Pipeline Specialists</h2>
            <p>
              Precision India has over 80 years of combined knowledge in the
              medical gas equipment industry, we embrace specialist requirements
              including all aspects of customer service, product design,
              cleanliness, packaging, and usability.{' '}
            </p>
          </div>
          <div className='about-us-card'>
            <div className='about-us-card-1 shadow'>
              <i className='fa-solid fa-hourglass-half about-us-icon'></i>
              <h2>Established in 1996</h2>
              <p>
                The company is now entering its 28th year and is proud of its
                growth and extended reputation as a major player in the
                worldwide family of Medical Gas Pipeline installers and users.
              </p>
            </div>
            <div className='about-us-card-1 shadow'>
              <i className='fa-solid fa-earth-americas about-us-icon'></i>
              <h2>Globally Recognised</h2>
              <p>
                We supply 90% of the India market and export to over 75
                countries worldwide. Growth has been structured to meet our
                customers needs both in the India and the expanding overseas
                markets.
              </p>
            </div>
            <div className='about-us-card-1 shadow'>
              <i className='fa-solid fa-trademark about-us-icon'></i>
              <h2>Our Brand</h2>
              <p>
              The MR Engg brand is a proudly owned trademark of MR Engg Pvt. Ltd. All MR Engg products are distinctly marked with this brand name, reflecting our commitment to exceptional design and quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
