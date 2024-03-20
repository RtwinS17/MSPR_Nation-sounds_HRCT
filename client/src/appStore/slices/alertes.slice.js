import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAlertes = () => async (dispatch) => {
  dispatch(getAlertesStart());
  try {
    const response = await axios.get('http://localhost:8000/api/alertes');
    dispatch(getAlertesSuccess(response.data));
  } catch (error) {
    dispatch(getAlertesFailure(error.message));
  }
};

const alerteSlice = createSlice({
  name: 'alertes',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {
    getAlertesStart: (state) => {
      state.loading = true;
    },
    getAlertesSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getAlertesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getAlertesStart, getAlertesSuccess, getAlertesFailure } = alerteSlice.actions;
export default alerteSlice.reducer;
