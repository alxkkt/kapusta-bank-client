import instance from './auth';

export const fetchTransaction = async body => {
  const { data } = await instance.post('/transactions', body);
  return data;
};
