import React, { useState, useEffect } from 'react';
import NavBarMobile from './composants/NavBar_Components/NavBar_Mobile/navBarMobile.component';
import { NavBarDesktop } from './composants/NavBar_Components/NavBar_Desktop/navBarDesktop.component';
import { MainContent } from './composants/Cards/Large/HomeCard/homeCard.component';
import { ThemeBtn } from './composants/Molecule/Button/themeChanger.btn';
import Diaporamahome from './composants/Cards/Large/HomeCard/diaporamaHome';
import HomeLogo from './composants/Molecule/Icon/homeLogo';
import { HomeContent } from './composants/Cards/Large/HomeCard/contentHome.component';


const App = () => {
  let [screenWidth, setScreenWidth] = useState(window.innerWidth)
  let [deviceUsed, setDeviceUSed] = useState('mobile')
  function updateScreenWidth() {
    setScreenWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth)
    screenWidth >= 640 ? setDeviceUSed('desktop') : setDeviceUSed('mobile')
  }, [screenWidth])


  return (
    <>
      <div className='h-screen w-screen'>

        {deviceUsed === 'mobile' ? <NavBarMobile /> : <NavBarDesktop />}
        <ThemeBtn />
        <Diaporamahome />
        <HomeLogo />
        <MainContent>
          <HomeContent/>
        </MainContent>
      </div>
    </>
  );
};

export default App;
