import React from 'react';
import './Director.css';
import directorImg from '../image/director.jpg';

const Director = () => {
  return (
    <div className='container'>
      <div className='director row'>
        <div className='header-director col-12'>
          <h2>Founder</h2>
          <p>S. Mohinder Singh</p>
        </div>

        <div className='director-upper-1 col-12 col-md-4'>
          <div className='text-right'>
            <img className='director' src={directorImg} alt='director/img' />
          </div>
        </div>
        <div className='director-upper-2 col-12 col-md-8'>
          <p>
            M.R. Engg. Works Pvt. Ltd. (formerly M.R. Engineering Works)
            respectfully acknowledges its profound gratitude to its founder, S.
            Mohinder Singh, whose unwavering dedication and industrious efforts
            have enabled the company to secure a prominent position in the
            Medical Gas Pipeline System (MGPS)manufacturing and sales industry.
          </p>
          <p>
            Mr. Singh, a paragon of discipline and commitment, commenced his
            illustrious career with BOC India Ltd in 1962. Over a distinguished
            tenure spanning 35 years, he honed his professional expertise,
            culminating in an exemplary record of service until 1996.
          </p>
        </div>

        <div className='director-lower'>
          <p>
            In 1996, leveraging his exceptional skills and innovative vision,
            Mr. Singh established an independent manufacturing and trading
            enterprise in Delhi, specializing in Medical Gas Pipeline Systems
            (MGPS). His meticulous supervision and adherence to stringent
            quality control protocols ensured the consistent delivery of
            superior products to the market.
          </p>
          <p>
            Mr. Singh’s steadfast principles and professional integrity have
            fostered enduring relationships with vendors both domestically and
            internationally. Today, MGPS products and accessories produced by
            M.R. Engg. Works Pvt. Ltd. are highly esteemed and in great demand
            among corporates, government hospitals, as well as private and
            government medical colleges and clinics, both within India and
            abroad.
          </p>
          <p>
            Prominently, BOC India Limited and numerous multinational
            corporations, recognized leaders in the field, have incorporated
            products from M.R. Engg. Works Pvt. Ltd. into their approved vendor
            lists.
          </p>
          <p>
            The notable acclaim and technological excellence of M.R. Engg. Works
            Pvt. Ltd. products are a direct reflection of Mr. Singh’s visionary
            leadership and innovative prowess.
          </p>
          <p>
            May divine providence grant S. Mohinder Singh a long and healthy
            life, enabling him to continue his invaluable guidance and influence
            on the company in the years ahead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Director;
