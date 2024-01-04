import React, { useState } from 'react';
import HomeIcon from '../../Molecule/Icon/homePicture-component';
import AccountIcon from '../../Molecule/Icon/accountPicture-component';
import './navBarMobile.style.css';
import BurgerIcon from '../../Molecule/Icon/burgerIcon-component';

const NavBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='fixed flex justify-between w-[90%] h-[50px] top-[90%] left-6 z-50'>
        <AccountIcon />
        <HomeIcon />
        <div onClick={toggleMenu}>
          <BurgerIcon />
        </div>
      </div>
      <div className={`flex fixed top-0 right-0 h-full ${isMenuOpen ? 'w-[40%]' : 'w-0'} z-10 transition-width rounded-l-3xl duration-500 ease-in-out navBarMob`}>
        <ul className='navBarMob-li '>
          <li>Billeterie</li>
          <li>Programmation</li>
          <li>Carte</li>
          <li>Infos pratiques</li>
          <li>Partenaires</li>
        </ul>
      </div>
    </>
  )
}

export default NavBarMobile;
