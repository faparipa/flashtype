import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <a
        target='_blank'
        className='footer-link'
        href='https://www.youtube.com/playlist?list=PLGyA74h_S9No5V5TRjHc893mN7rs-VaoZ'
        rel='noreferrer'
      >
        Watch the full react course now!
      </a>
    </div>
  );
};

export default Footer;
