import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './composants/Header';
import './App.css';
import Footer from './composants/Footer';
import ArtistesDetails from './pages/ArtisteDetails';
import HomePage from './pages/HomePage';
import ArtistesPage from './pages/LineUp';


const App = () => {
  return (
    <Router>
      <Header />
     
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/LineUp" element={<ArtistesPage/>} />
      <Route path="/ArtisteDetails" element={<ArtistesDetails/>} />
      </Routes>
      
      
      
      <Footer />
    </Router>
  );
};

export default App;
