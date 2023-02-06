import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { loginUser, registerUser, logoutUser } from 'services/API/API';

// Регистрация
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await registerUser(credentials);

      toast.success('Congratulations! Your account is created.');

      return data;
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

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await logoutUser();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
