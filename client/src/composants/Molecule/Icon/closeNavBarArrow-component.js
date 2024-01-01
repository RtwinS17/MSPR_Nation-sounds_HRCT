import React from 'react';
import { useSelector } from 'react-redux';
import leftArrow from './../../../ressources/left-arrow-svgrepo-com.svg';
import leftArrowNight from './../../../ressources/leftArrowIcon_night.svg';

import './icons.style.css';

function CloseMenuIcon({id=""}) {
  let theme = useSelector(store => store.theme.value)
  return (
    <div id={id} className='leftArrow-icon w-[50px]'>
    {theme === 'day' ? <img src={leftArrow} alt="Icon for closing Menu" /> : <img src={leftArrowNight} alt="Icon for closing Menu" />}  
    </div>
  )
}

export default CloseMenuIcon;