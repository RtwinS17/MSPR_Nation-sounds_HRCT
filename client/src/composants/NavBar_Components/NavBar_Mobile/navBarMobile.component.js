import React from 'react';
import AccountIcon from '../../Molecule/Icon/accountPicture-component';
import BurgerIcon from '../../Molecule/Icon/burgerIcon-component';

const NavBarMobile = () => {
  return (
    <>
      <div className='fixed flex justify-between w-[90%] h-[50px] top-[90%] left-6 z-50'>
        <AccountIcon />
        <BurgerIcon/>
      </div>
    </>
  )
}

export default NavBarMobile;