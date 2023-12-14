import React from 'react';
import accountLog from './../../../ressources/account-svgrepo-com.svg';
import './icons.style.css';


function AccountIcon({id=""}) {
  // Import result is the URL of your image
  return (
    <div id={id} className='icon-user-logIn w-[50px]'>
      <img src={accountLog} alt="Icon for login" />
    </div>
  )
}

export default AccountIcon;