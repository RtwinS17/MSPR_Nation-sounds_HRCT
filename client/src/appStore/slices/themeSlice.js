import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: 'day'
    },
    reducers: {
        updateTheme: (state) => {
            if (state.value === 'day') {
                state.value = 'dark'
                document.body.className = state.value + '-theme'
            } else {
                state.value = 'day'
                document.body.className = state.value + '-theme'
            }
        }
    }
})

export const { updateTheme } = themeSlice.actions;
export default themeSlice.reducer;