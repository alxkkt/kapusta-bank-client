import instance from './auth';

const getTransactionsByYear = async ({ year, month }) => {
  instance.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjc4YmJiYWY3M2Q3NTZhNTlkNWJjNiIsImlhdCI6MTY2MDQwOTMzMywiZXhwIjoxNjYwNjY4NTMzfQ.T-j1FIQaWYftjWFXnY3_RZpA_K61xF2nss1YiQ4BZjk`;
  const { data } = await instance.get(`/transactions/total/${month}/${year}`);
  console.log(data);
  return data;
};
export default getTransactionsByYear;
