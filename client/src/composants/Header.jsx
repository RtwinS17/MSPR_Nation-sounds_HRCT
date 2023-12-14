import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import RoundedButton from './RoundedButton';




function Header() {

  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px est généralement la largeur pour 'md' dans Tailwind
        setIsOpen(false);
      }
    };

    // Écoutez les changements de taille de la fenêtre
    window.addEventListener('resize', handleResize);

    // Nettoyage de l'effet
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header >
     <div className='grid grid-cols-4 items-center justify-items-center w-full px-2'>
      <div className='flex flex-col gap-3 md:flex-row'>
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faXTwitter} />
        </div>
      <Link to="/" className='w-64 md:w-80 col-span-2'>
      <div ><img src="/Nation-sounds_1.png" alt="logo"  /></div>
      </Link>
      <RoundedButton href="/">Acheter mes billets</RoundedButton>
      </div>

      
      <div className={`flex flex-col rounded-l-3xl drop-shadow-lg p-2 pb-5 fixed top-0 right-0 h-full bg-Jaune transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
        <button className="absolute top-10 right-25 p-2" onClick={() => setIsOpen(false)}>
          <div className="hamburger-line rotate-45 translate-y-1.5"></div>
          <div className="hamburger-line opacity-0"></div>
          <div className="hamburger-line -rotate-45 -translate-y-1.5"></div>
        </button>

          {/* Les liens du menu */}
         <div className='flex flex-col h-screen justify-center p-2 pr-20 gap-y-10'>
          <Link className='hover:text-Bleufonce hover:font-bold' to="/LineUp" onClick={() => setIsOpen(false)}><p >LineUp</p></Link>
          <Link className='hover:text-Bleufonce hover:font-bold' to="/artistes" onClick={() => setIsOpen(false)}>Le festival</Link>
          <Link className='hover:text-Bleufonce hover:font-bold' to="/artistes" onClick={() => setIsOpen(false)}>Billeterie</Link>
          <Link className='hover:text-Bleufonce hover:font-bold' to="/artistes" onClick={() => setIsOpen(false)}>Plan</Link>
          <Link className='hover:text-Bleufonce hover:font-bold' to="/artistes" onClick={() => setIsOpen(false)}>Infos Pratiques</Link>
          <Link className='hover:text-Bleufonce hover:font-bold' to="/artistes" onClick={() => setIsOpen(false)}>Partenaires</Link>
          </div> 
          {/* Ajoutez d'autres liens ici */}
          <RoundedButton href="/">Mon compte</RoundedButton>
      </div>

      <button className="mx-auto hamburger md:invisible" onClick={() => setIsOpen(!isOpen)}> 
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>

      <nav className='flex h-full p-4 bg-Jaune md:flex-row md:visible invisible justify-around'>
      <Link to="/LineUp">
      <div className='items-center hover:font-bold hover:text-Bleufonce'>
        LineUp
      </div>
      </Link>
      <div className='border-r border-Bleufonce self-stretch'></div>
      
      <div className='flex h-full items-center hover:font-bold hover:text-Bleufonce'>
        Le Festival
      </div>
      <div className='border-r border-Bleufonce self-stretch'></div>
          
      <div className='flex h-full items-center hover:font-bold hover:text-Bleufonce'>
        Billeterie
      </div>
      <div className='border-r border-Bleufonce self-stretch'></div>
          
      <div className='flex h-full items-center hover:font-bold hover:text-Bleufonce'>
        Plan
      </div>
      <div className='border-r border-Bleufonce self-stretch'></div>

      <div className='flex h-full items-center hover:font-bold hover:text-Bleufonce'>
        Infos Pratiques
      </div>
      <div className='border-r border-Bleufonce self-stretch'></div>
      <div className='flex h-full items-center hover:font-bold hover:text-Bleufonce'>
        Partenaires
      </div>
      

        
      </nav>
    </header>
  );
}

export default Header;
