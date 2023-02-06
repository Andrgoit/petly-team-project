import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { loginUser, fetchRegister } from 'services/API/API';

// Регистрация
export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      await fetchRegister(data);
      // return data;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);
// Логінізація
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await loginUser(credentials);
      return data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);
