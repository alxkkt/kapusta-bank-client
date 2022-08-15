import instance from './auth';

export const getBalance = async () => {
  const { data } = await instance.get('/balance/current');

  return data;
};

export const updateBalance = async body => {
  const { data } = await instance.patch('/balance/update', {
    totalBalance: body,
  });
  return data;
};
