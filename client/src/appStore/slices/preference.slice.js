import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const preferenceSlice = createSlice({
    name: 'preference',
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: {
        updatePreference(state, action) {
            // Mettre à jour la préférence avec les données reçues de l'API
            state.data = action.payload;
            state.loading = false;
        },

        getPreference(state) {
            // Effectuer une requête pour récupérer la préférence
            state.loading = true;
            axios.get('http://localhost:3000/api/preference')
                .then(response => {
                    // Si la requête est réussie, mettre à jour la préférence dans le state
                    state.loading = false;
                    state.data = response.data;
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        addPreference(state, action) {
            // Ajouter une nouvelle préférence avec l'objet préférence fourni
            state.loading = true;
            axios.post('http://localhost:3000/api/preference', action.payload)
                .then(response => {
                    // Si la requête est réussie, ajouter la nouvelle préférence au state
                    state.loading = false;
                    state.data.push(response.data);
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        removePreference(state, action) {
            // Supprimer une préférence avec l'ID de la préférence fournie
            const preferenceId = action.payload;
            state.loading = true;
            axios.delete(`http://localhost:3000/api/preference/${preferenceId}`)
                .then(() => {
                    // Si la requête est réussie, supprimer la préférence du state
                    state.loading = false;
                    state.data = state.data.filter(preference => preference.id !== preferenceId);
                })
                .catch(error => {
                    // En cas d'erreur, mettre à jour le state avec l'erreur
                    state.loading = false;
                    state.error = error.message;
                });
        },

        showPreference(state) {
            console.log(state.data);
        },
    }
});

export const { updatePreference, getPreference, addPreference, removePreference, showPreference } = preferenceSlice.actions;
export default preferenceSlice.reducer;
