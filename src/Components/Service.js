import React from 'react';
import './Service.css';
import  img1 from  "../image/IMG_1631.jpg"
import  img3 from  "../image/IMG_1811.jpg"
import  img2 from  "../image/IMG_1913.jpg"


const Service = () => {
  return (
    <div>
      <div className='services '>
        <h1>
          Our Service <span style={{ color: '#2EA6F6' }}></span>
        </h1>
        <div className='ser-p container'>
          <p  id='para_colour'>
          MR Engg offers a complete end-to-end solution for medical gas pipeline systems. Our dedicated sales and customer service team is here to guide you through the entire process, from initial consultation to order placement.
          </p>
        </div>
        {/* Service Card */}
        <div className='card-container'>
          <div className='card'>
            <img  id='img_service' src={img1}
              alt='Card 1'
            />
            <div className='card-body'>
              <h2>Theatre Suction Trolley</h2>
              <p className='pb-5' id='para_colour'>
              A theatre suction trolley is a mobile unit with a suction pump and collection canisters, used to remove fluids and debris during surgeries. It has wheels for easy movement in the operating room.{' '}
              </p>
              <button> Learn More</button>
            </div>
          </div>
          <div className='card'>
            <img  id='img_service'
              src={img2}
              alt='Card 2'
            />
            <div className='card-body'>
              <h2>Nurse Call System
              </h2>
              <p id='para_colour' >
              A nurse call system is a communication tool used in healthcare settings that allows patients to alert nurses or staff for assistance. It typically includes call buttons or devices installed in patient rooms and a central control panel for staff to receive and respond to alerts promptly.{' '}
              </p>
              <button>Learn More</button>
            </div>
          </div>
          
          <div className='card'>
            <img  id='img_service'
              src={img3}
              alt='Card 3'
            />
            <div className='card-body'>
              <h2 >Bed Head Panel
              </h2>
              <p className='pb-4' id='para_colour' >
              A bed head panel is a unit mounted at the head of a hospital bed, providing essential controls and connections. It typically includes features like power outlets, lighting controls, nurse call buttons, and sometimes gas outlets for medical equipment.{' '}
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
