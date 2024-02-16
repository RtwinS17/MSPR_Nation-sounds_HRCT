import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SlicesServices } from '../../Service/Slices.service';
import axios from 'axios';

const commentaireSlice = createSlice({
    name: 'commentaires',
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: {
        updateCommentaires(state){
            // update state.data from the api
            // Set loading to false / true once it's done
          },
  
        getCommentaire(state) {
            // Get response from api
            // If success --> Call update, while loading set lodaing to true, once done set it to false
            // If error --> Throw error into state.error and log
        },

        addCommentaire(state, commentaireObj = {}) {
            // push data with api (fetch's options)
            // If success --> call update, while loading set lodaing to true, once done set it to false
            // If error --> throw error into state.error and log
        },

        removeCommentaire(state, commenaireObjID = 0) {
            // Delete obj with api
            // Call service if need to find the obj to delete
            // If success --> Call update, while loading set lodaing to true, once done set it to false
            // If error --> Throw error into state.error and log
        },

        showCommentaires(state) {
            console.log(state)
        },
    }
});


export const {updateCommentaires, getCommentaire, addCommentaire, removeCommentaire, showCommentaires} = commentaireSlice.actions
export default commentaireSlice.reducer