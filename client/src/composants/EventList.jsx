import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  const [concerts, setConcerts] = useState([]);
  const [newConcert, setNewConcert] = useState({
    groupe: '',
    horaires: 0,
    scene: '',
    descriptif: '',
  });

  useEffect(() => {
    axios.get('api/concerts')
      .then(response => setConcerts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewConcert(prevConcert => ({ ...prevConcert, [name]: value }));
  };

  const handleAddConcert = () => {
    // Appel API Laravel pour ajouter un nouveau concert
    axios.post('nation/back/api/concerts', newConcert) // Assurez-vous que le chemin est correct
      .then(response => {
        // Mettre à jour la liste des concerts après l'ajout
        setConcerts(prevConcerts => [...prevConcerts, response.data]);
        // Réinitialiser le formulaire
        setNewConcert({
          groupe: '',
          horaires: 0,
          scene: '',
          descriptif: '',
        });
      })
      .catch(error => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire
    handleAddConcert(); // Appeler la fonction de traitement de l'ajout du concert
  };

  return (
    <div>
      <h2>Liste des Concerts</h2>
      <ul>
        {concerts.map(concert => (
          <li key={concert.id}>
            {concert.groupe} - {concert.horaires} - {concert.scene} - {concert.descriptif}
            <button>Éditer</button>
            <button>Supprimer</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddConcert}>Ajouter un Concert</button>
      <form onSubmit={handleSubmit}>
        <label>Groupe: <input type="text" name="groupe" value={newConcert.groupe} onChange={handleInputChange} /></label>
        <label>Horaires: <input type="number" name="horaires" value={newConcert.horaires} onChange={handleInputChange} /></label>
        <label>Scene: <input type="text" name="scene" value={newConcert.scene} onChange={handleInputChange} /></label>
        <label>Descriptif: <input type="text" name="descriptif" value={newConcert.descriptif} onChange={handleInputChange} /></label>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default EventList;
