import instance from './auth';

const getTransactionsByYear = async ({ year, month }) => {
  const { data } = await instance.get(`/transactions/total/${month}/${year}`);
  console.log(data);
  return data;
};

export default getTransactionsByYear;
