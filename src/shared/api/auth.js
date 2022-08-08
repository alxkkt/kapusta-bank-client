import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kapusta-backend-proj.herokuapp.com/api',
});

const addToken = accessToken => {
  instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const removeToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const signup = async body => {
  const { data } = await instance.post('/auth/signup', body);

  return data;
};

export const login = async body => {
  const { data } = await instance.post('/auth/login', body);
  addToken(data.accessToken);

  return data;
};

export const getCurrent = async accessToken => {
  addToken(accessToken);
  try {
    const { data } = await instance.get('/auth/current');

    return data;
  } catch (error) {
    removeToken();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post('/auth/logout');
  removeToken();

  return data;
};

export default instance;