import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SlicesServices } from '../../Service/Slices.service';
import axios from 'axios';

const FAQSlice = createSlice({
    name: 'FAQ',
    initialState: {
        loading: false,
        error: null,
        data: [
            {
            id: 0,
            question: "Lroagiaiu hzuie gozuhi uhaziufh ?",
            response: "sihjbzoiegzoi oiuzo izizu oGRAOU",
        },
    ],
    },
    reducers: {
        getFAQ(state) {
            const response = state
            return response
        },
    }
});

export const {getFAQ} = FAQSlice.actions
export default FAQSlice.reducer