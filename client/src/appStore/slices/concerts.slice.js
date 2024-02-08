import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SlicesServices } from '../../Service/Slices.service';
import axios from 'axios';


const concertsSlice = createSlice({
    name: 'concerts',
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: {
        updateConcerts(state){
            // update state.data from the api
            // Set loading to false / true once it's done
          },
  
        getConcert(state) {
            // Get response from api
            // If success --> Call update, while loading set lodaing to true, once done set it to false
            // If error --> Throw error into state.error and log
        },

        addConcert(state, concertObj = {}) {
            // push data with api (fetch's options)
            // If success --> call update, while loading set lodaing to true, once done set it to false
            // If error --> throw error into state.error and log
        },

        removeConcert(state, concertObjID = 0) {
            // Delete obj with api
            // Call service if need to find the obj to delete
            // If success --> Call update, while loading set lodaing to true, once done set it to false
            // If error --> Throw error into state.error and log
        },

        showConcerts(state) {
            console.log(state)
        },
    }
});


export const {updateConcerts, getConcert, addConcert, removeConcert, showConcerts} = concertsSlice.actions
export default concertsSlice.reducer