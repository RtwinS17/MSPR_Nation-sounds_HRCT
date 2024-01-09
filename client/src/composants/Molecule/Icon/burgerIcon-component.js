import React from 'react';
import { useSelector } from 'react-redux';
import burgerIcon from './../../../ressources/burger-menu-svgrepo-com.svg';
import burgerIconNight from './../../../ressources/burgerIcon_night.svg';
import './icons.style.css';

function BurgerIcon({id="", size="50px"}) {
  let theme = useSelector(store => store.theme.value)

  return (
    <div id={id} className={`w-[${size}]`}>
     {theme === "day" ? <img src={burgerIcon} alt="Icon for menu" /> : <img src={burgerIconNight} alt="Icon for menu" />} 
    </div>
  )
}

export default BurgerIcon;