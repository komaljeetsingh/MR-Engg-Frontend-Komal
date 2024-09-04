import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className='container'>
      <div className='contact-us row'>
        <div className='contact-details col-12 col-md-6 '>
          {/* <p className='contact-details-p text-black'>QUICK SUPPORT –</p> */}
          <h2 className='contact-details-h2 fw-bolder'>Contact Us</h2>
          <div className='contact-s'>
            <div>
              <h4 className='fw-bolder callus' id='call_uss'>Call Us</h4>
              <p className='text-black'> +91-9811610877 </p>
              <p className='text-black'> +91-9810348780 </p>
              <p className='text-black'> +91-9310601480 </p>
            </div>

            <div>
              <h4 className='fw-bolder' id='call_uss'>Email Us</h4>
              <p className='text-black'> buisdev.mrenggworks@gmail.com </p>
              <p className='text-black'> mrenggworksmain@yahoo.com </p>
            </div>

            <div>
              <h4 className='fw-bolder' id='call_uss'>Our Address</h4>
              <p>8/33 Kirti Nagar, Industrial Area New Delhi -110015</p>
            </div>
          </div>
        </div>
        <div className='contact-form col-12 col-md-6'>
          <div className='contact-form-1'>
            <p className='contact-details-p'>GET IN TOUCH –</p>
            <h2 className='contact-details-h2'>Support Is Online</h2>
            <form className='contact-form'>
              <div className='form-row'>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  className='form-input'
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='form-input'
                />
              </div>
              <div className='form-row'>
                <input
                  type='tel'
                  name='mobile'
                  placeholder='Mobile'
                  className='form-input'
                />
                <input
                  type='text'
                  name='company'
                  placeholder='Company'
                  className='form-input'
                />
              </div>
              <div className='form-row'>
                <textarea
                  name='message'
                  placeholder='Message'
                  className='form-input message-input'
                ></textarea>
              </div>
              <button type='submit' className='submit-button'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
