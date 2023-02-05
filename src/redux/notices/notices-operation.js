import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchNotices, addNotice } from 'services/API/API';
import { toast } from 'react-toastify';

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

export const createNotice = createAsyncThunk(
  'notices/createNotice',
  async ({ valuesToSend, token }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await addNotice(valuesToSend, config);
      toast.success('New notice succesfully added');
      return data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue();
    }
  }
);
