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
export const fetchRegister = async credentials => {
  const { data } = await instance.post('/auth/register', credentials);
  // setAuthHeader(data.token);
  return data;
};

export const fetchNotices = async () => {
  const { data } = await instance.get('/notices/category/sell');
  return data;
};
export const fetchPets = async credentials => {
  const { data } = await instance.post('/pets', credentials);
  return data;
};
