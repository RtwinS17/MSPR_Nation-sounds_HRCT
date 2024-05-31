import React, { useState } from 'react';
import { postAdminConcert } from '../../../Service/adminAPI/adminAPI.service';
import { MainContent } from '../../Permanent/homeCard.component';

import './CreateConcert.style.css';

export const CreateConcert = () => {
    const [concertData, setConcertData] = useState({
        Groupe: '',
        Duree: '',
        Horaire: '',
        scene_id: '',
        Descriptif: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === "Horaire") {
            const date = new Date(value);
            const formattedDate = date.toISOString().split('T')[0];
            setConcertData({ ...concertData, [name]: formattedDate });
        } else {
            setConcertData({ ...concertData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postAdminConcert(concertData);
            // Réinitialisation des champs après soumission réussie
            setConcertData({
                Groupe: '',
                Duree: '',
                Horaire: '',
                scene_id: '',
                Descriptif: ''
            });
            alert('Concert créé avec succès !');
        } catch (error) {
            console.error('Error creating concert:', error);
            alert('Une erreur s\'est produite lors de la création du concert.');
        }
    };

    return (
        <MainContent>
            <form className='h-full flex flex-col justify-between gap-2 text-center CreateConcertContainer' onSubmit={handleSubmit}>
                
                    <label htmlFor="Groupe">Groupe:</label>
                    <input
                        type="text"
                        id="Groupe"
                        name="Groupe"
                        value={concertData.Groupe}
                        onChange={handleChange}
                        required
                    />
             
                    <label htmlFor="Duree">Durée:</label>
                    <input
                        type="text"
                        id="Duree"
                        name="Duree"
                        value={concertData.Duree}
                        onChange={handleChange}
                        required
                    />
               
                    <label htmlFor="Horaire">Horaire:</label>
                    <input
                        type="date"
                        id="Horaire"
                        name="Horaire"
                        value={concertData.Horaire}
                        onChange={handleChange}
                        required
                    />
               
                    <label htmlFor="scene_id">ID de la scène:</label>
                    <input
                        type="text"
                        id="scene_id"
                        name="scene_id"
                        value={concertData.scene_id}
                        onChange={handleChange}
                        required
                    />
               
                    <label htmlFor="Descriptif">Descriptif:</label>
                    <textarea
                        id="Descriptif"
                        name="Descriptif"
                        value={concertData.Descriptif}
                        onChange={handleChange}
                        required
                    ></textarea>
                
                <button type="submit">Créer Concert</button>
            </form>
        </MainContent>
    );
};
