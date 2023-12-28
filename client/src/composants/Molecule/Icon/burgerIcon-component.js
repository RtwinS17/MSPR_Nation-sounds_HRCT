import React from 'react';
import { useSelector } from 'react-redux';
import burgerIcon from './../../../ressources/burger-menu-svgrepo-com.svg';
import burgerIconNight from './../../../ressources/burgerIcon_night.svg';
import './icons.style.css';

function BurgerIcon({id=""}) {
  let theme = useSelector(store => store.theme.value)

  return (
    <div id={id} className='burger-icon w-[50px]'>
     {theme === "day" ? <img src={burgerIcon} alt="Icon for menu" /> : <img src={burgerIconNight} alt="Icon for menu" />} 
    </div>
  )
}

export default BurgerIcon;