import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './authOperations';

const initialState = {
  user: {
    email: null,
    name: null,
    location: null,
    phone: null,
  },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
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
      // state.accessToken = payload.user.accessToken;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(register.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    // end Registration
    builder.addCase(login.pending, state => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.accessToken = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    });

    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export default authSlice.reducer;
