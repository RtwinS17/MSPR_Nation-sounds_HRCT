import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const commentaireSlice = createSlice({
    name: 'commentaires',
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: {
        getCommentaire(state) {
            // Effectuer une requête pour récupérer les commentaires
            state.loading = true;
            axios.get('http://localhost:8000/api/commentaires')
                .then(response => {
                    // Si la requête est réussie, mettre à jour les commentaires dans le state
                    state.loading = false;
                    state.data = response.data;
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        addCommentaire(state, action) {
            // Ajouter un nouveau commentaire avec l'objet commentaire fourni
            state.loading = true;
            axios.post('http://localhost:3000/api/commentaires', action.payload)
                .then(response => {
                    // Si la requête est réussie, ajouter le nouveau commentaire au state
                    state.loading = false;
                    state.data.push(response.data);
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },
    }
});

export const { getCommentaire, addCommentaire } = commentaireSlice.actions;
export default commentaireSlice.reducer;
