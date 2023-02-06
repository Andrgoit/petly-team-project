import { createSlice } from '@reduxjs/toolkit';
import { register, login, refreshUser, logOut } from './authOperations';

const initialState = {
  user: {
    email: null,
    name: null,
    location: null,
    phone: null,
  },
  accessToken: null,
  refreshToken: null,
  isRefreshing: false,
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
      // state.user = payload.user;
      state.accessToken = payload.token;
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

    builder.addCase(logOut.pending, state => {
      state.error = '';
    });

    builder.addCase(logOut.fulfilled, (state, { payload }) => {
      state.accessToken = null;
      state.isLoggedIn = false;
      // state.token = null;
      //треба обнулити юзера ще
    });

    builder.addCase(logOut.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
      state.error = '';
    });

    builder.addCase(refreshUser.fulfilled, (state, { payload }) => {
      // console.log('refresh=', payload);
      state.user = payload;
      state.isLogged = true;
      state.isRefreshing = false;
      state.error = '';
    });

    builder.addCase(refreshUser.rejected, state => {
      state.isRefreshing = false;
    });
  },
});

export default authSlice.reducer;
