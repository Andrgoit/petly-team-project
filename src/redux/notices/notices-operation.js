import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addNotice } from 'services/API/API';
import { toast } from 'react-toastify';
import { fetchRemoveNotice } from 'services/API/API';

axios.defaults.baseURL = 'https://petly-backend.onrender.com/api/';

export const getNotices = createAsyncThunk(
  'notices/categoryName',
  async ({ categoryName }, thunkApi) => {
    function changeFetch() {
      const fetchFree = '/category/ingoodhands';
      const routFree = 'for-free';

      const fetchLost = '/category/lostfound';
      const routLost = 'lost-found';

      const fetchSell = '/category/sell';
      const routSell = 'sell';

      const fetchFavorite = '/favorite';
      const routFavorite = 'favorite';

      const fetchOwn = '/current';
      const routOwn = 'own';

      if (categoryName === routFree) {
        return fetchFree;
      }
      if (categoryName === routLost) {
        return fetchLost;
      }
      if (categoryName === routSell) {
        return fetchSell;
      }
      if (categoryName === routFavorite) {
        return fetchFavorite;
      }
      if (categoryName === routOwn) {
        return fetchOwn;
      } else {
        return categoryName;
      }
    }

    try {
      const { data } = await axios.get(`/notices${changeFetch(categoryName)}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
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
export const removeNotice = createAsyncThunk(
  'notices/remove',
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      await fetchRemoveNotice(id);

      return id;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);
