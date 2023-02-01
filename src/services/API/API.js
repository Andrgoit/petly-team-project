import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://petly-backend.onrender.com/api',
});

export const fetchNews = async () => {
  const { data } = await instance.get('/news');
  return data;
};

export const fetchFriends = async () => {
  const { data } = await instance.get('/friends');
  return data;
};
