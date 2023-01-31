import { createSlice } from '@reduxjs/toolkit';
import { getFriends } from './news-operations';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'friends',
  initialState,
  extraReducers: {
    [getFriends.pending]: (store, _) => ({
      ...store,
      loading: true,
    }),
    [getFriends.fulfilled]: (store, { payload }) => ({
      ...store,
      data: payload,
      loading: false,
    }),

    [getFriends.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});

export default newsSlice.reducer;
