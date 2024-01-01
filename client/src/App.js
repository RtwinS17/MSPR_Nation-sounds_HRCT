import React, { useState, useEffect } from 'react';
import NavBarMobile from './composants/NavBar_Components/NavBar_Mobile/navBarMobile.component';
import { NavBarDesktop } from './composants/NavBar_Components/NavBar_Desktop/navBarDesktop.component';
import { HomeCard } from './composants/Cards/Large/HomeCard/homeCard.component';
import { useSelector } from 'react-redux';
import { ThemeBtn } from './composants/Molecule/Button/themeChanger.btn';
import  Diaporamahome  from './composants/Cards/Large/HomeCard/diaporamaHome';
import  HomeLogo  from './composants/Molecule/Icon/homeLogo';

const App = () => {
  let [screenWidth, setScreenWidth] = useState(window.innerWidth)
  let [deviceUsed, setDeviceUSed] = useState('mobile')
  function updateScreenWidth() {
    setScreenWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth)
    screenWidth >= 640 ? setDeviceUSed('desktop') : setDeviceUSed('mobile')
  })

  let theme = useSelector(store => store.theme.value)


  return (
    <>
      <div className='h-screen w-screen'>
       {deviceUsed === 'mobile' ? <NavBarMobile/> : <NavBarDesktop/>}
 <HomeCard />
          <ThemeBtn />
        <div className='fixed ml-6 h-screen flex flex-col mt-12 sm:ml-[100px]'>
          <Diaporamahome />
          <HomeLogo /> 
          <HomeCard />
        </div>
      </div>
    </>
  );
};

export default App;