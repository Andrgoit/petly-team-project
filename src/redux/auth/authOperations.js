import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// !!!! Возможно потом его перенесем в .env
axios.defaults.baseURL = 'https://petly-backend.onrender.com';

// Записываем токен в заголовок
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Очищаем заголовок
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Регистрация
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setAuthHeader(data.token);
      alert('Congratulations, your account has been successfully created.');
      return data;
    } catch (error) {
      alert(error.message);
      return rejectWithValue();
    }
  }
);
