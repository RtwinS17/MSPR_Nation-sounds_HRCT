import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SlicesServices } from '../../Service/Slices.service';
import axios from 'axios';

const alerteSlice = createSlice({
    name: 'alertes',
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: {
        updateAlertes(state){
            // update state.data from the api
            // Set loading to false / true once it's done
          },
  
        getAlerte(state) {
            // Get response from api
            // If success --> Call update, while loading set lodaing to true, once done set it to false
            // If error --> Throw error into state.error and log
        },

        addAlerte(state, alerteObj = {}) {
            // push data with api (fetch's options)
            // If success --> call update, while loading set lodaing to true, once done set it to false
            // If error --> throw error into state.error and log
        },

        removeAlerte(state, alerteObjID = 0) {
            // Delete obj with api
            // Call service if need to find the obj to delete
            // If success --> Call update, while loading set lodaing to true, once done set it to false
            // If error --> Throw error into state.error and log
        },

        showAlertes(state) {
            console.log(state)
        },
    }
});


export const {updateAlertes, getAlerte, addAlerte, removeAlerte, showAlertes} = alerteSlice.actions
export default alerteSlice.reducer