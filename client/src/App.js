import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EventList from './composants/Formulaires/EventList';
import EventForm from './composants/Formulaires/EventForm';
import './App.css';
import WordPressPost from './composants/WordPressPost';
import Map from './composants/Cartes/map';
import SomePageComponent from './composants/SomePageComponent';



const App = () => {
  return (
    <Router>
      <ul>
        <li><Link to="/events">Événements</Link></li>
        <li><Link to="/artists">Artistes</Link></li>
      </ul>
      <WordPressPost />
      <SomePageComponent />
      <Map />
      <Routes>
       
        <Route path="/events" element={<EventList />} />
        <Route path="/events/add" element={<EventForm />} />
      </Routes>
    </Router>
  );
};

export default App;
