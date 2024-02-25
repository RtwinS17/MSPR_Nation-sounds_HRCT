import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const genresSlice = createSlice({
    name: 'genres',
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: {
        updateGenres(state, action) {
            // Mettre à jour les genres avec les données reçues de l'API
            state.data = action.payload;
            state.loading = false;
        },

        getGenres(state) {
            // Effectuer une requête pour récupérer les genres
            state.loading = true;
            axios.get('http://localhost:3000/api/genres')
                .then(response => {
                    // Si la requête est réussie, mettre à jour les genres dans le state
                    state.loading = false;
                    state.data = response.data;
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        addGenre(state, action) {
            // Ajouter un nouveau genre avec l'objet genre fourni
            state.loading = true;
            axios.post('http://localhost:3000/api/genres', action.payload)
                .then(response => {
                    // Si la requête est réussie, ajouter le nouveau genre au state
                    state.loading = false;
                    state.data.push(response.data);
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        removeGenre(state, action) {
            // Supprimer un genre avec l'ID du genre fourni
            const genreId = action.payload;
            state.loading = true;
            axios.delete(`http://localhost:3000/api/genres/${genreId}`)
                .then(() => {
                    // Si la requête est réussie, supprimer le genre du state
                    state.loading = false;
                    state.data = state.data.filter(genre => genre.id !== genreId);
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        showGenres(state) {
            console.log(state.data);
        },
    }
});

export const { updateGenres, getGenres, addGenre, removeGenre, showGenres } = genresSlice.actions;
export default genresSlice.reducer;
