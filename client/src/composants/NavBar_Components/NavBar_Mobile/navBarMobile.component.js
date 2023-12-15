import React from 'react';
import HomeIcon from '../../Molecule/Icon/homePicture-component';
import AccountIcon from '../../Molecule/Icon/accountPicture-component';
import './navBarMobile.style.css'
import BurgerIcon from '../../Molecule/Icon/burgerIcon-component';

const NavBarMobile = () => {
  return (
    <>
      <div className='fixed flex justify-between w-[90%] h-[50px] top-[90%] left-6 z-50'>
        <AccountIcon />
        <HomeIcon />
        <BurgerIcon/>
      </div>
    </>
  )
}

export default NavBarMobile;