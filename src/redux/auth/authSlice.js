import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOperations';

const initialState = {
  user: {
    email: null,
    name: null,
    city: null,
    phone: null,
  },
  accessToken: null,
  refreshToken: null,
  IsLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    // start Registration
    builder.addCase(register.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.accessToken = payload.user.accessToken;
      state.IsLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(register.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    // end Registration
  },
});

export default authSlice.reducer;
