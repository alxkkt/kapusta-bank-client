import instance from './auth';
import { addToken } from './auth';

export const fetchTransaction = async (body, accessToken) => {
  addToken(accessToken);
  const { data } = await instance.post('/transactions', body);
  return data;
};
