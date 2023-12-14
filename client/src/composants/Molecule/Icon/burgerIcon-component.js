import React from 'react';
import burgerIcon from './../../../ressources/burger-menu-svgrepo-com.svg';
import './icons.style.css';


function BurgerIcon({id=""}) {
  // Import result is the URL of your image
  return (
    <div id={id} className='burger-icon w-[50px]'>
      <img src={burgerIcon} alt="Icon for menu" />
    </div>
  )
}

export default BurgerIcon;