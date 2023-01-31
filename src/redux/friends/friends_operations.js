import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchFriends } from 'services/APIFriens';

export const fetchFriends = createAsyncThunk(
  'friends/fetchFriends',
  async (_, { rejectWithValue }) => {
    try {
      const friends = await fetchFriends();
      return friends;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);
