import axios from 'axios';

axios.defaults.baseURL = 'https://petly-backend.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:4000/api';

export const fetchNews = async () => {
  const { data } = await axios.get('/news');
  return data;
};

export const fetchFriends = async () => {
  const { data } = await axios.get('/friends');
  return data;
};

export const fetchUserData = async () => {
  const { data } = await axios.get('/users/current');
  console.log(data);
  return data;
};

export const registerUser = async credentials => {
  const { data } = await axios.post('/auth/register', credentials);

  return data;
};

export const loginUser = async credentials => {
  const { data } = await axios.post('/auth/login', credentials);

  return data;
};

export const logoutUser = async credentials => {
  await axios.post('/auth/logout');
};

export const fetchNotices = async () => {
  const { data } = await axios.get('/notices/category/sell');
  return data;
};
