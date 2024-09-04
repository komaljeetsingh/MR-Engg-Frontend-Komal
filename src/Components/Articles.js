import React from 'react';
import img1 from "../image/Anaesthetic Gas Scavenging System.png"
import img2 from "../image/Medical Oxygen Flowmeter.png"
import img3 from "../image/Operation Theatre Control Panel Surgeon Control Panel (Touch Screen).png"

import './Articles.css';

const Articles = () => {
  return (
    <div className='pb-5'>
      <div className='articles-upper'>
        <h1 className='fw-bold'>
          Latest  Articles <span style={{ color: '#2EA6F6' }}></span>
        </h1>
        <p>Read all the latest information from MR Engg</p>
      </div>
      <div className='articles'>
        <div className='card cards'>
          <img  id='img_service'
            src={img1}
            alt='Card 1'
          />
          <div className='card-body'>
            <h2>Anaesthetic Gas Scavenging System
            </h2>
            <p>
            An Anaesthetic Gas Scavenging System (AGSS) removes waste anaesthetic gases from operating rooms, ensuring a safe environment by preventing exposure to healthcare staff.
            </p>
          </div>
        </div>
        <div className='card cards'>
          <img  id='img_service'
            src={img2}
            alt='Card 1'
          />
          <div className='card-body'>
            <h2>Medical Oxygen Flowmeter
            🤔</h2>
            <p>
            A Medical Oxygen Flowmeter regulates and measures oxygen flow to patients, ensuring accurate delivery.
            </p>
          </div>
        </div>
        <div className='card cards'>
          <img  id='img_service'
            src={img3} 
            alt='Card 1'
          />
          <div className='card-body'>
            <h2>Operation Theatre Control Panel</h2>
            <p>
            An Operation Theatre Control Panel monitors and controls key functions like lighting, temperature, and gas supply, creating an optimal surgical environment.            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
