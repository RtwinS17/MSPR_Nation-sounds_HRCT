
import React, { useState } from 'react';
import HomeIcon from '../../Molecule/Icon/homePicture-component';
import AccountIcon from '../../Molecule/Icon/accountPicture-component';
import './navBarMobile.style.css';
import BurgerIcon from '../../Molecule/Icon/burgerIcon-component';
import FacebookIcon from '../../Molecule/Icon/fbIcon-component';
import TwitterIcon from '../../Molecule/Icon/xIcon-component';
import InstagramIcon from '../../Molecule/Icon/instIcon-component';
import XIcon from '../../Molecule/Icon/closeMobNavbarIcon-component';

const NavBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='fixed flex justify-between w-[90%] h-[50px] top-[90%] left-6 z-10'>
        <button className="btn-accent p-2 font-bold min-w-[80px]">
          <span>Carte</span>
        </button>
        <div onClick={toggleMenu}>
          <BurgerIcon />
        </div>
      </div>
      <div className={`flex flex-col fixed top-0 right-0 h-full ${isMenuOpen ? 'w-[50%]' : 'w-0'} z-10 transition-width rounded-l-3xl duration-500 ease-in-out navBarMob`}>
        <ul className='navBarMob-li '>
          <li>Billeterie</li>
          <li>Programmation</li>
          <li>Carte</li>
          <li>Infos pratiques</li>
          <li>Partenaires</li>
        </ul>
        <div className='flex flex-row gap-x-6 mx-auto'>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
        <div onClick={toggleMenu} className='flex justify-end w-full p-10'>
          <XIcon />
        </div>


      </div>
    </>
  )
}

export default NavBarMobile;
