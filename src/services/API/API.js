import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://petly-backend.onrender.com/api',
});

export const getNews = async () => {
  const { data } = await instance.get('/news');
  console.log(data);
  return data;
};
