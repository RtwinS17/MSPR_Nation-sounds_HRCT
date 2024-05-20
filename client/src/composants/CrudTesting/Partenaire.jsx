import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Partenaire() {
    const [partenaires, setPartenaires] = useState([]);
    const [formData, setFormData] = useState({
        id: null,
        name: '',
        description: '',
        website: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchPartenaires();
    }, []);

    const fetchPartenaires = () => {
        axios.get('/api/partenaires')
            .then(response => setPartenaires(response.data))
            .catch(error => console.error(error));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            axios.put(`/api/partenaires/${formData.id}`, formData)
                .then(() => {
                    fetchPartenaires();
                    resetForm();
                })
                .catch(error => console.error(error));
        } else {
            axios.post('/api/partenaires', formData)
                .then(() => {
                    fetchPartenaires();
                    resetForm();
                })
                .catch(error => console.error(error));
        }
    };

    const handleEdit = (partenaire) => {
        setFormData(partenaire);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        axios.delete(`/api/partenaires/${id}`)
            .then(() => fetchPartenaires())
            .catch(error => console.error(error));
    };

    const resetForm = () => {
        setFormData({ id: null, name: '', description: '', website: '' });
        setIsEditing(false);
    };

    const hasPermission = (action) => {
        // Mettre en place les autorisations
        return true;
    };

    return (
        <div style={{ margin: '20px' }}>
            <h1>Gestion des Partenaires</h1>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nom"
                        required
                        style={{ padding: '10px', width: '100%' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        required
                        style={{ padding: '10px', width: '100%' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="Site Web"
                        required
                        style={{ padding: '10px', width: '100%' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px', marginRight: '10px' }}>
                    {isEditing ? 'Mettre à jour' : 'Ajouter'}
                </button>
                {isEditing && (
                    <button onClick={resetForm} style={{ padding: '10px 20px' }}>
                        Annuler
                    </button>
                )}
            </form>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {partenaires.map(partenaire => (
                    <li key={partenaire.id} style={{ marginBottom: '10px' }}>
                        {partenaire.name} - {partenaire.description} - <a href={partenaire.website} target="_blank" rel="noopener noreferrer">{partenaire.website}</a>
                        {hasPermission('edit') && (
                            <button onClick={() => handleEdit(partenaire)} style={{ marginLeft: '10px', padding: '5px 10px' }}>
                                Modifier
                            </button>
                        )}
                        {hasPermission('delete') && (
                            <button onClick={() => handleDelete(partenaire.id)} style={{ marginLeft: '10px', padding: '5px 10px' }}>
                                Supprimer
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Partenaire;
