import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { loginUser, registerUser } from 'services/API/API';

// !!!! Возможно потом его перенесем в .env
// axios.defaults.baseURL = 'https://petly-backend.onrender.com/api';

// Записываем токен в заголовок
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Очищаем заголовок

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

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
