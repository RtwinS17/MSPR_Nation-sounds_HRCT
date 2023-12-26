import React from 'react';
import Diaporamahome from '../composants/Diaporamahome';
import HomeCards from '../composants/HomeCards';
import SomePageComponent from '../composants/SomePageComponent';

function HomePage() {
  return (
    <div>
      <Diaporamahome />
      <HomeCards />
      <SomePageComponent/>
    </div>
  );
}

export default HomePage;
