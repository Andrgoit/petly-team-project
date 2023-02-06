import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL =
  'https://petly-backend.onrender.com/api/';

// import { fetchNotices } from 'services/API/API';

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
                    } if (categoryName === routLost) {
                      return fetchLost;
                    } if (categoryName === routSell) {
                      return fetchSell;
                    } if (categoryName === routFavorite) {
                      return fetchFavorite;
                    }
                    if (categoryName === routOwn) {
                      return fetchOwn;
                    } else {
                      return categoryName;
                    }
          };

        
    try {
      const { data } = await axios.get(
        `/notices${changeFetch(categoryName)}`
      );
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