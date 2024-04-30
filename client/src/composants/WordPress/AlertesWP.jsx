import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './AlertesWP.style.css';

const AlertesWP = () => {
  const [alertes, setAlertes] = useState([]);

  useEffect(() => {
    const fetchAlertes = async () => {
      try {
        const response = await axios.get('https://nationsounds.online/wp-json/wp/v2/posts?categories=5');
        setAlertes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlertes();
  }, []);

  return (
    <div className='h-full overflow-y-auto rounded-b-md alertes-container'>
      <h2 className='text-center p-8'>Alertes</h2>
      <ul className='flex flex-col gap-8 my-8 overflow-y-scroll'>
        {alertes.map(alerte => (
          <div className='alerte text-center pb-4 mx-4'>
          <li className='p-4 w-[80%] md:w-[60%] m-auto rounded-3xl' key={alerte.id}>{alerte.title.rendered}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AlertesWP;
