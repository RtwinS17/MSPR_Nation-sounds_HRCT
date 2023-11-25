// ArtistList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get('nation/back/api/concerts')
      .then(response => setArtists(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Liste des Artistes</h2>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name} - {artist.genre}
            <button>Éditer</button>
            <button>Supprimer</button>
          </li>
        ))}
      </ul>
      <button>Ajouter un Artiste</button>
    </div>
  );
};

export default ArtistList;
