import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container pt-4'>
      <div className='container'>
        <div className='row'>
          <div className='footer-1 col-12 col-md-6 col-lg-4'>
            <h4 className='fw-bolder contact text-white'>Contact Us</h4>
         
            <div>
            <h4 className='fw-bolder callus text-white'><i class='fa-solid fa-phone text-white'></i>    Call Us</h4>
            <p className='text-white'> +91-9811610877 </p>
            <p className='text-white'> +91-9810348780 </p>
            <p className='text-white'> +91-9310601480 </p>
            </div>

            
            <h4 className='fw-bolder text-white'>  <i class='fa-solid fa-location-dot text-white'></i>   Email Us</h4>

            <p className='text-white text-white'> buisdev.mrenggworks@gmail.com</p>
            <p className='text-white text-white'> mrenggworksmain@yahoo.com</p>

            <h4 className='fw-bolder text-white '><i class='fa-solid fa-envelope text-white'></i>   Our Address</h4>

            <p className='text-white'>
                8/33 Kirti Nagar, Industrial Area New Delhi -110015
            </p>

          </div>

          <div className='footer-2 col-12 col-md-6 col-lg-4'>
            <h4 className='fw-bolder working text-white'>Working Hours</h4>

            <p className='text-white'> +91-9810348780 </p>

            <h4 className='fw-bolder text-white'>Email Us</h4>

            <p className='text-white'> mrenggworksmain@yahoo.com </p>

            <h4 className='fw-bolder text-white'>Our Address</h4>

            <h4 className='fw-bolder text-white'>Policies</h4>
            <h4 className='fw-bolder text-white'>Payment Terms & Conditions</h4>
          </div>

          <div className='footer-3 col-12 col-md-6 col-lg-4'>
            <h4 className='fw-bolder text-white'>Find Us Here</h4>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14005.390377580614!2d77.13561854959873!3d28.64930918276825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d028a792de867%3A0xff6211369d4a8c23!2sM.R.Engg%20Works%20Pvt%20Ltd%2C%20RJH%20Complex%20%2C%208%2F33%20%2C%203RD%20FLOOR%20%2C%20NEAR%20UNDER%20PASS%20KIRTI%20NAGAR%20INDUSTRIAL%20AREA%20NEW%20DELHI%2C%20New%2C%20Delhi%2C%20110015!3m2!1d28.647588!2d77.144921!5e0!3m2!1sen!2sin!4v1725450153685!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
              width='100%'
              height='90%'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
      <hr className='border' />
      {/* <div className='pb-2 pt-2 text-center text-white'>
        <p>Copyright claim @2024 Kanakdrishristi PVT. LTD.</p>
      </div> */}

      <div className='container  kanak '>
                    <p className=' text-white text-start kanak_first'>  2024 MR Engg. All rights reserved</p>
                    <p className=' text-white kanak_second'>  Designed and Developed by <span className='text-danger'>   <a className='text-decoration-underlined text-white' href='https://kanakdrishtiinfo.com/' target='blank'>Kanak Drishti Infotech</a> </span></p>

                </div>

    </div>
  );
};

export default Footer;
