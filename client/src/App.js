import React from 'react';
import Map from './composants/Cartes/map';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EventList from './composants/Formulaires/EventList';
import EventForm from './composants/Formulaires/EventForm';

const App = () => {
  return (
    <Router>
      <div className='flex flex-col h-[100VH]'>

        <header id='header-section' className='w-full h-[8%] fixed items-center flex justify-between p-3'>
          <div>
            <img alt='Logo App'></img>
          </div>

          <div>
            Nation-sounds
          </div>

          <ul>
            <li><Link to="/events">Événements</Link></li>
          </ul>

        </header>

        <div id='main-content' className='w-full h-full flex flex-col md:flex-row justify-around items-center'>
          <div className='h-[200px] w-[80%] md:w-[50%] md:h-[80%] text-center border-red-500 border-2'> Map </div>
          <Map></Map>
          <div className='h-[100px]'> Event </div>
          <div className='h-[100px]'> Info </div>

        </div>


        <footer id='footer-section' className='w-full h-[10%] flex justify-between items-center p-3 mt-auto'>
          <div id='contact'> Contacts </div>
          <div id='partenaire-footer'> Partenaires </div>
        </footer>
      </div>


      <Routes>
        <Route path="/events" element={<EventList />} />
        <Route path="/events/add" element={<EventForm />} />
      </Routes>
    </Router>
  );
};

export default App;
