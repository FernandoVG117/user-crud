import React from 'react';
import './footer.css';
import image from './logo-atomic.png'

const Footer = () => {
  return (
    <div className='footer'>
      <figure className='footer__image'>
        <img src={image} alt="logo" className='footer__img'/>
      </figure>
      <div className='footer__container'>
        <p> CopyRight &copy; 2024 | All Rights Reserved</p>
      </div>
      <figure className='footer__image'>
        <img src={image} alt="logo" className='footer__img'/>
      </figure>
    </div>
  )
}

export default Footer
