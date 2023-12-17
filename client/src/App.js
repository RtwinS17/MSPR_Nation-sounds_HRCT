import React from 'react';
import NavBarMobile from './composants/NavBar_Components/NavBar_Mobile/navBarMobile.component';
import { NavBarDesktop } from './composants/NavBar_Components/NavBar_Desktop/navBarDesktop.component';
import { HomeCard } from './composants/Cards/Large/HomeCard/homeCard.component';
import Map from './composants/Map/map';

const App = () => {
  return (
    <>
      <div className="h-screen w-screen">
        {deviceUsed === 'mobile' ? <NavBarMobile /> : <NavBarDesktop />}
        <div className="main-container fixed ml-6 h-screen flex flex-col mt-12 sm:ml-[100px]">
          <HomeCard />
          <div className="flex items-center justify-center h-1/2">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

// Importance de récupurer la taille de l'écran à minima au démarrage de l'app

let deviceUsed = '';

export const getDeviceScreenSize = () => {
  let scWidth = window.innerWidth;
  if (scWidth) {
    if (+scWidth <= 640) {
      deviceUsed = 'mobile';
    } else deviceUsed = 'desktop';
  } else return 'screen width undected';
};

// State

// On init
getDeviceScreenSize();
