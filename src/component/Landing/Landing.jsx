import React from 'react';
import Typewriter from 'typewriter-effect';

import './Landing.css';
import hero from './../../assets/hero.png';

const Landing = () => {
  return (
    <div className='landing-container'>
      <div className='landing-left' data-aos='fade-right'>
        <h1 className='landing-header'>Can you type...</h1>
        <div className='typewriter-container'>
          <Typewriter
            options={{
              strings: ['Fast?', 'Correct?', 'Quick?'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className='landing-right'>
        <img
          data-aos='fade-left'
          className='hero-image'
          src={hero}
          alt='hero'
        />
      </div>
    </div>
  );
};

export default Landing;
