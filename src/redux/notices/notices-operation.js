import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL =
  'https://petly-backend.onrender.com/api/';

// import { fetchNotices } from 'services/API/API';

export const getNotices = createAsyncThunk(
  'notices/categoryName',
  async ({ categoryName }, thunkApi) => {
    try {
      const { data } = await axios.get(`/notices/category/${categoryName}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


// export const getNotices = createAsyncThunk(
//   'notices/categoryName',
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await fetchNotices();
//       return data;
//     } catch (error) {
//       throw rejectWithValue(error.message);
//     }
//   }
// );