import { createAsyncThunk } from '@reduxjs/toolkit';

import { editUserInfo, fetchUserData } from '../../services/API/API';

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

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await editUserInfo(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
