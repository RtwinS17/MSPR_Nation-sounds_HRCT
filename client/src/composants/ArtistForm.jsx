// ArtistForm.jsx
import React, { useState } from 'react';

const ArtistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    genre: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Envoyer les données au backend (Laravel)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nom de l'Artiste</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <label>Genre Musical</label>
      <input type="text" name="genre" value={formData.genre} onChange={handleChange} />
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default ArtistForm;
