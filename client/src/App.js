import React from 'react';
import Map from './composants/Cartes/map';

const App = () => {
  return (
   
      <div className='flex flex-col h-[100VH]'>

        <header id='header-section' className='w-full h-[8%] fixed items-center flex justify-between p-3'>
          <div>
            <img alt='Logo App'></img>
          </div>

          <div>
            Nation-sounds
          </div>

          <ul>
            <li>Events</li>
          </ul>

        </header>

        <div id='main-content' className='w-full h-full flex flex-col md:flex-row justify-around items-center pt-6'>
          <div className='h-[200px] w-[80%] md:w-[50%] md:h-[80%] text-center'> <Map></Map> </div>
          <div className='h-[100px]'> Event </div>
          <div className='h-[100px]'> Info </div>

        </div>


        <footer id='footer-section' className='w-full h-[10%] flex justify-between items-center p-3 mt-auto'>
          <div id='contact'> Contacts </div>
          <div id='partenaire-footer'> Partenaires </div>
        </footer>
      </div>

  );
};

export default App;
