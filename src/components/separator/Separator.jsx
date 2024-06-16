import React from 'react';
import image from './page-separator-01.png';
import './separator.css';

const Separator = () => {
  return (
    <div className='separator'>
        <div className='separator__line'>
            <div className='separator__division left'></div>
        </div>
        <figure>
            <img src={image} alt="separator" className='separator__image' />
        </figure>
        <div className='separator__line'>
            <div className='separator__division right'></div>
        </div>
    </div>
  )
}

export default Separator
