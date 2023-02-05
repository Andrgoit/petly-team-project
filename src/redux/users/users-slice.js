import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './users-operations';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [getUser.pending]: (store, _) => ({
      ...store,
      loading: true,
    }),
    [getUser.fulfilled]: (store, { payload }) => ({
      ...store,
      data: payload,
      loading: false,
    }),

    [getUser.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});

export default UsersSlice.reducer;
