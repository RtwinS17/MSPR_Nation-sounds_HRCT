import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './ProgrammesWP.style.css';

const ProgrammesWP = () => {
  const [programmes, setProgrammes] = useState([]);

  useEffect(() => {
    const fetchProgrammes = async () => {
      try {
        const response = await axios.get('https://nationsounds.online/wp-json/wp/v2/posts?categories=6');
        setProgrammes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProgrammes();
  }, []);

  return (
    <div className='h-full flex flex-col'>
      <h2 className='text-4xl text-center font-bold mb-2'>Programmes</h2>
      <ul className='grow grid grid-cols-1 gap-y-3 overflow-y-scroll'>
        {programmes.map(programme => (
          <li className='concertContainer rounded-b-lg' key={programme.id}>
            <h3 className='concertTitle font-bold mb-2 p-2 text-center'>{programme.title.rendered}</h3>
            <article className='p-1 concertArticle' dangerouslySetInnerHTML={{ __html: programme.excerpt.rendered }} />
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgrammesWP;
