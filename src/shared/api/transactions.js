import instance from './auth';
import { addToken } from './auth';

export const fetchTransaction = async body => {
  const { data } = await instance.post('/transactions', body);
  addToken(data.token);
  return data;
};
