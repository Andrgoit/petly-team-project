import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchUsers } from '../../services/API/API';

export const getUser = createAsyncThunk(
  'users/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchUsers();
      return data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);
