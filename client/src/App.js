import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EventList from './composants/EventList';
import EventForm from './composants/EventForm';
import ArtistList from './composants/ArtistList';
import ArtistForm from './composants/ArtistForm';

const App = () => {
  return (
    <Router>
      <ul>
        <li><Link to="/events">Événements</Link></li>
        <li><Link to="/artists">Artistes</Link></li>
      </ul>
      <Routes>
        <Route path="/events" element={<EventList />} />
        <Route path="/events/add" element={<EventForm />} />
        <Route path="/artists" element={<ArtistList />} />
        <Route path="/artists/add" element={<ArtistForm />} />
      </Routes>
    </Router>
  );
};

export default App;
