import axios from 'axios';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };
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

export const loginUser = async credentials => {
  const { data } = await instance.get('/auth/login', credentials);
  setAuthHeader(data.token);
  return data;
};
