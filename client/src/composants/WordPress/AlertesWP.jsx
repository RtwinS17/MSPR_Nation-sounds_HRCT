import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AlertesWP = () => {
  const [alertes, setAlertes] = useState([]);

  useEffect(() => {
    const fetchAlertes = async () => {
      try {
        const response = await axios.get('https://nationsounds.online/wp-json/wp/v2/posts?categories=3');
        setAlertes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlertes();
  }, []);

  return (
    <div>
      <h2>Alertes</h2>
      <ul>
        {alertes.map(alerte => (
          <li key={alerte.id}>{alerte.title.rendered}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlertesWP;
