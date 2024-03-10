import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DetailsArtistesWP = () => {
  const [detailsArtistes, setDetailsArtistes] = useState([]);

  useEffect(() => {
    const fetchDetailsArtistes = async () => {
      try {
        const response = await axios.get('https://nationsounds.online/wp-json/wp/v2/posts?categories=1');
        setDetailsArtistes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetailsArtistes();
  }, []);

  return (
    <div>
      <h2>Détails Artistes</h2>
      <ul>
        {detailsArtistes.map(detailArtiste => (
          <li key={detailArtiste.id}>{detailArtiste.title.rendered}</li>
        ))}
      </ul>
    </div>
  );
};

export default DetailsArtistesWP;
