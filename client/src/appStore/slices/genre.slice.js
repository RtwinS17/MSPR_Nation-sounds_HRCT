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
        getGenres(state) {
            // Effectuer une requête pour récupérer les genres
            state.loading = true;
            axios.get('http://localhost:8000/api/genres')
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
        }
    }
});

export const { getGenres } = genresSlice.actions;
export default genresSlice.reducer;
