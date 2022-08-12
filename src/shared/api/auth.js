import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kapusta-backend-proj.herokuapp.com/api',
  // baseURL: 'http://localhost:3030/api',
});

export const addToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const signUp = async body => {
  const { data } = await instance.post('/auth/register', body);
  return data;
};

export const reverify = async email => {
  const { data } = await instance.post('/auth/verify', { email });
  return data;
};

export const signIn = async body => {
  const { data } = await instance.post('/auth/login', body);

  addToken(data.accessToken);
  return data;
};

export const getCurrentUser = async accessToken => {
  addToken(accessToken);
  try {
    const { data } = await instance.get('/user');
    return data;
  } catch (error) {
    removeToken();
    throw error;
  }
};

export const logOut = async () => {
  const { data } = await instance.post('/auth/logout');
  removeToken();
  return data;
};

export const logInByGoogle = async () => {
  const { data } = await instance.post('/auth/google');
  addToken(data.accessToken);
  return data;
};

export const getBalance = async accessToken => {
  addToken(accessToken);
  const { data } = await instance.get('/auth/balance');
  return data;
};

export const updateBalance = async (accessToken, body) => {
  addToken(accessToken);
  const { data } = await instance.get('/auth/balance', body);
  return data;
};

export default instance;
