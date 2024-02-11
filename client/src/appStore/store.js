import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import alertesReducer from './slices/alertes.slice';
import commentairesReducer from './slices/commentaires.slice';
import concertsReducer from './slices/concerts.slice';
import FAQReducer from './slices/FAQ.slice';

export default configureStore({
    reducer: {
        theme: themeReducer,
        alertes: alertesReducer,
        commentaires: commentairesReducer,
        concerts: concertsReducer,
        FAQ: FAQReducer,
    },
    devTools: true,
})