import { createSlice } from '@reduxjs/toolkit';
import { getNotices, createNotice } from './notices-operation';

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
    [createNotice.pending]: store => ({
      ...store,
      loading: true,
    }),
    [createNotice.fulfilled]: store => ({
      ...store,
      loading: false,
    }),
    [createNotice.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});

export default noticesSlice.reducer;
