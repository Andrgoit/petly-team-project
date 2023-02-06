import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchUserData } from '../../services/API/API';

export const getUser = createAsyncThunk(
  'users/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchUserData();

      return data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);
