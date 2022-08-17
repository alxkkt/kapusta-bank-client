import instance from './auth';

const getTransactionsByYear = async ({ year, month }) => {
  const { data } = await instance.get(`/transactions/total/${month}/${year}`);

  return data;
};

export default getTransactionsByYear;
