import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchNotices, fetchRemoveNotice } from 'services/API/API';

export const getNotices = createAsyncThunk(
  'notices/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchNotices();
      return data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

export const removeNotice = createAsyncThunk(
  'notices/remove',
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      console.log('test operation');
      const data = await fetchRemoveNotice(id);
      console.log(data);
      return id;
    } catch (error) {
      console.log(error);
      throw rejectWithValue(error.message);
    }
  }
);
