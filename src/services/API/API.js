import axios from 'axios';
import { selectAccessToken } from 'redux/auth/authSelectors';

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};
export const instance = axios.create({
  baseURL: 'https://petly-backend.onrender.com/api',
  // baseURL: 'http://localhost:4000/api',
});

export const fetchNews = async () => {
  const { data } = await instance.get('/news');
  return data;
};

export const fetchFriends = async () => {
  const { data } = await instance.get('/friends');
  return data;
};

export const fetchUserData = async () => {
  const { data } = await instance.get('/users/current');
  return data;
};

export const registerUser = async credentials => {
  const { data } = await instance.post('/auth/register', credentials);
  setAuthHeader(data.token);
  return data;
};

export const loginUser = async credentials => {
  const { data } = await instance.post('/auth/login', credentials);
  setAuthHeader(data.token);
  return data;
};

export const logoutUser = async credentials => {
  const { data } = await instance.post('/auth/logout', credentials);
  clearAuthHeader(selectAccessToken);
  console.log(data);
  return data;
};

export const fetchNotices = async () => {
  const { data } = await instance.get('/notices/category/sell');
  return data;
};

export const fetchNoticeById = async id => {
  const { data } = await instance.get(`/notices/notice/${id}`);
  return data;
};

export const addNotice = async (values, config) => {
  const { data } = await instance.post('/notices/notice', values, config);
  return data;
};

export const fetchPets = async credentials => {
  const { data } = await instance.post('/pets', credentials);
  return data;
};

export const fetchPetsDelete = async id => {
  const { data } = await instance.delete(`/pets/${id}`);
  return data;
};
