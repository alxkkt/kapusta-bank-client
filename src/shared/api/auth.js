import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kapusta-backend-proj.herokuapp.com/api/auth',
});

export const addToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const signUp = async body => {
  const { data } = await instance.post('/register', body);
  return data;
};

export const reverify = async email => {
  const { data } = await instance.post('/verify', { email });
  return data;
};

export const signIn = async body => {
  const { data } = await instance.post('/login', body);

  addToken(data.accessToken);
  return data;
};

export const getCurrentUser = async accessToken => {
  addToken(accessToken);
  try {
    const { data } = await instance.get('/current');
    return data;
  } catch (error) {
    removeToken();
    throw error;
  }
};

export const logOut = async () => {
  const { data } = await instance.post('/logout');
  removeToken();
  return data;
};

export const logInByGoogle = async () => {
  const { data } = await instance.post('/google');
  addToken(data.accessToken);
  return data;
};

export const getBalance = async accessToken => {
  addToken(accessToken);
  const { data } = await instance.get('/balance');

  return data;
};

export const updateBalance = async (body, accessToken) => {
  addToken(accessToken);

  const { data } = await instance.patch('/balance', {
    totalBalance: body,
  });
  return data;
};

export default instance;
