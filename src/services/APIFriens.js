import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://petly-backend.onrender.com/api',
});

export const fetchFriends = async () => {
  const { data } = await instance.get('/friends');
  return data;
};
