import React from 'react';
import leftArrow from './../../../ressources/left-arrow-svgrepo-com.svg';
import './icons.style.css';


function CloseMenuIcon({id=""}) {
  // Import result is the URL of your image
  return (
    <div id={id} className='leftArrow-icon w-[50px]'>
      <img src={leftArrow} alt="Icon for closing Menu" />
    </div>
  )
}

export default CloseMenuIcon;