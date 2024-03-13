import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProgrammesWP = () => {
  const [programmes, setProgrammes] = useState([]);

  useEffect(() => {
    const fetchProgrammes = async () => {
      try {
        const response = await axios.get('https://nationsounds.online/wp-json/wp/v2/posts?categories=3');
        setProgrammes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProgrammes();
  }, []);

  return (
    <div>
      <h2>Programmes</h2>
      <ul>
        {programmes.map(programme => (
          <li key={programme.id}>{programme.title.rendered}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProgrammesWP;
