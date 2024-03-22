import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userPreference',
  initialState: {
    configuration: {},
  },
  reducers: {},
});

export default userSlice.reducer;
