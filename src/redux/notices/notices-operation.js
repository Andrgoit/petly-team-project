import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchNotices } from 'services/API/API';

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
