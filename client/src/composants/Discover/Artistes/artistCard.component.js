import React from 'react';
import './artistCard.style.css'; 

const ArtistCard = ({ artist }) => {
  if (!artist) {
    return null;
  }

  return (
    <div className="card mx-4 my-4 rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 md:h-64">
      <img src={artist.photo} alt={artist.nom_groupe} className="w-full h-full object-cover object-center" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{artist.nom_groupe}</h5>
        <p className="card-text">{artist.type_musique}</p>
      </div>
    </div>
  );
};

export default ArtistCard;