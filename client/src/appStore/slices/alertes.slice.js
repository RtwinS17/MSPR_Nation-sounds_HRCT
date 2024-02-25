import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const alerteSlice = createSlice({
    name: 'alertes',
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: {
        updateAlertes(state, action) {
            state.data = action.payload;
        },

        getAlertes(state) {
            state.loading = true;
            axios.get('http://localhost:3000/api/alertes')
                .then(response => {
                    state.loading = false;
                    state.data = response.data;
                })
                .catch(error => {
                    state.loading = false;
                    state.error = error.message;
                });
        },

        addAlerte(state, action) {
            state.loading = true;
            axios.post('http://localhost:3000/api/alertes', action.payload)
                .then(response => {
                    state.loading = false;
                    state.data.push(response.data);
                })
                .catch(error => {
                    state.loading = false;
                    state.error = error.message;
                });
        },

        removeAlerte(state, action) {
            state.loading = true;
            const alerteIdToRemove = action.payload;
            axios.delete(`http://localhost:3000/api/alertes/${alerteIdToRemove}`)
                .then(() => {
                    state.loading = false;
                    state.data = state.data.filter(alerte => alerte.id !== alerteIdToRemove);
                })
                .catch(error => {
                    state.loading = false;
                    state.error = error.message;
                });
        },

        showAlertes(state) {
            console.log(state.data);
        },
    }
});

export const { updateAlertes, getAlertes, addAlerte, removeAlerte, showAlertes } = alerteSlice.actions;
export default alerteSlice.reducer;
