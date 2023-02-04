import { createSlice } from '@reduxjs/toolkit';
import { getNotices } from './notices-operation';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: {
    [getNotices.pending]: (store, _) => ({
      ...store,
      loading: true,
    }),
    [getNotices.fulfilled]: (store, { payload }) => ({
      ...store,
      data: payload,
      loading: false,
    }),

    [getNotices.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});

export default noticesSlice.reducer;
