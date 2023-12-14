import React from 'react';
import homeIcon from './../../../ressources/home-1-svgrepo-com.svg';
import './icons.style.css';


function HomeIcon({id=""}) {
    // Import result is the URL of your image
    return (
        <div id={id} className='w-[50px] icon-home-navBar'>
            <img src={homeIcon} alt="Icon for login" />
        </div>
    )
}

export default HomeIcon;