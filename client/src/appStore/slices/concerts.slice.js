import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const concertsSlice = createSlice({
    name: 'concerts',
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: {
        updateConcerts(state, action) {
            // Mettre à jour les concerts avec les données reçues de l'API
            state.data = action.payload;
            state.loading = false;
        },

        getConcert(state) {
            // Effectuer une requête pour récupérer les concerts
            state.loading = true;
            axios.get('http://localhost:3000/api/concerts')
                .then(response => {
                    // Si la requête est réussie, mettre à jour les concerts dans le state
                    state.loading = false;
                    state.data = response.data;
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        addConcert(state, action) {
            // Ajouter un nouveau concert avec l'objet concert fourni
            state.loading = true;
            axios.post('http://localhost:3000/api/concerts', action.payload)
                .then(response => {
                    // Si la requête est réussie, ajouter le nouveau concert au state
                    state.loading = false;
                    state.data.push(response.data);
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        removeConcert(state, action) {
            // Supprimer un concert avec l'ID du concert fourni
            const concertId = action.payload;
            state.loading = true;
            axios.delete(`http://localhost:3000/api/concerts/${concertId}`)
                .then(() => {
                    // Si la requête est réussie, supprimer le concert du state
                    state.loading = false;
                    state.data = state.data.filter(concert => concert.id !== concertId);
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        showConcerts(state) {
            console.log(state.data);
        },
    }
});

export const { updateConcerts, getConcert, addConcert, removeConcert, showConcerts } = concertsSlice.actions;
export default concertsSlice.reducer;
