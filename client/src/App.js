import React from 'react';
import NavBarMobile from './composants/NavBar_Components/NavBar_Mobile/navBarMobile.component';
import { NavBarDesktop } from './composants/NavBar_Components/NavBar_Desktop/navBarDesktop.component';
const App = () => {
  return (

    <>
      <div className='h-screen w-screen'>
       {deviceUSed === 'mobile' ? <NavBarMobile/> : <NavBarDesktop/>}
        <div className='main-container fixed ml-6 h-screen flex flex-col sm:ml-[100px]'>
        </div>
      </div>
    </>

  );
};

export default App;

let deviceUSed = '';

function getScreenWidth(){
  return window.innerWidth
}

function getDeviceScreenSize(){
  let scWidth = getScreenWidth()
if (scWidth) {
  if (+scWidth <= 640) {
    deviceUSed = 'mobile'
  } else deviceUSed = 'desktop'
} else return ''
}

getDeviceScreenSize()