import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const partenairesSlice = createSlice({
    name: 'partenaires',
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: {
        updatePartenaires(state, action) {
            // Mettre à jour les partenaires avec les données reçues de l'API
            state.data = action.payload;
            state.loading = false;
        },

        getPartenaires(state) {
            // Effectuer une requête pour récupérer les partenaires
            state.loading = true;
            axios.get('http://localhost:3000/api/partenaires')
                .then(response => {
                    // Si la requête est réussie, mettre à jour les partenaires dans le state
                    state.loading = false;
                    state.data = response.data;
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        addPartenaire(state, action) {
            // Ajouter un nouveau partenaire avec l'objet partenaire fourni
            state.loading = true;
            axios.post('http://localhost:3000/api/partenaires', action.payload)
                .then(response => {
                    // Si la requête est réussie, ajouter le nouveau partenaire au state
                    state.loading = false;
                    state.data.push(response.data);
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        removePartenaire(state, action) {
            // Supprimer un partenaire avec l'ID du partenaire fourni
            const partenaireId = action.payload;
            state.loading = true;
            axios.delete(`http://localhost:3000/api/partenaires/${partenaireId}`)
                .then(() => {
                    // Si la requête est réussie, supprimer le partenaire du state
                    state.loading = false;
                    state.data = state.data.filter(partenaire => partenaire.id !== partenaireId);
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        showPartenaires(state) {
            console.log(state.data);
        },
    }
});

export const { updatePartenaires, getPartenaires, addPartenaire, removePartenaire, showPartenaires } = partenairesSlice.actions;
export default partenairesSlice.reducer;
