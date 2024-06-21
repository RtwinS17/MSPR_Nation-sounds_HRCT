import React from "react";
import { Link } from 'react-router-dom';
import './navBarDesktop.style.css';


export const NavBarDesktop = () => {
   

    return (
        <nav className='relative navBarDesk-container bg-white bg-opacity-25 mt-6 flex p-4 md:flex-row justify-around z-20'>
        <Link to="/">
        <div className='items-center hover:font-bold hover:text-Bleufonce'>
          Accueil
        </div>
        </Link>
        <div className='border-r border-Bleufonce self-stretch'></div>
        <Link to="/discover/programmation">
        <div className='items-center hover:font-bold hover:text-Bleufonce'>
          Programmation
        </div>
        </Link>
        <div className='border-r border-Bleufonce self-stretch'></div>
      
        
      <Link to="/billetterie">
        <div className='flex h-full items-center hover:font-bold hover:text-Bleufonce'>
          Billetterie
        </div>
      </Link>
      <div className='border-r border-Bleufonce self-stretch'></div>
        
      <Link to="/map">
        <div className='flex h-full items-center hover:font-bold hover:text-Bleufonce'>
          Plan
        </div>
      </Link>
      <div className='border-r border-Bleufonce self-stretch'></div>

      <Link to="/infos-pratiques">
        <div className='flex h-full items-center hover:font-bold hover:text-Bleufonce'>
          Infos Pratiques
        </div>
      </Link>
      <div className='border-r border-Bleufonce self-stretch'></div>
      
      <Link to="/partenaires">
        <div className='flex h-full items-center hover:font-bold hover:text-Bleufonce'>
          Partenaires
        </div>
      </Link>
          
        </nav>
    );
}


