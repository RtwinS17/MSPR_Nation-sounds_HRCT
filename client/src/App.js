import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBarMobile from './composants/NavBar_Components/NavBar_Mobile/navBarMobile.component';
import { NavBarDesktop } from './composants/NavBar_Components/NavBar_Desktop/navBarDesktop.component';
import { MainContent } from './composants/Cards/Large/HomeCard/homeCard.component';
import { ThemeBtn } from './composants/Molecule/Button/themeChanger.btn';
import Diaporamahome from './composants/Cards/Large/HomeCard/diaporamaHome';
import HomeLogo from './composants/Molecule/Icon/homeLogo';
import { HomeContent } from './composants/Cards/Large/HomeCard/contentHome.component';
import ArtistCard from './composants/Cards/Large/ArtistCards/artistCard.component';



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

        <Router>
        {deviceUsed === 'mobile' ? <NavBarMobile /> : <NavBarDesktop />}
        <Routes>
          <Route path="/" element={
          <>
          <MainContent>
          <HomeContent/>
        </MainContent>
        </>
            } />
      <Route path="programmation" element={<ArtistCard />} />
            <Route path="billeterie"  />
            <Route path="carte"  />
            <Route path="infos-pratiques"  />
            <Route path="partenaires"  />
            <Route path="details"  />
        </Routes>
        </Router>
        <ThemeBtn />
        <Diaporamahome />
        <HomeLogo />
        
      </div>
    </>
  );
};

export default App;
