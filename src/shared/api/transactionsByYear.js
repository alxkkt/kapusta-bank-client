import instance from './auth';
import axios from 'axios';

const transactionInstance = axios.create({
  baseURL: 'https://kapusta-backend-proj.herokuapp.com/api',
});
const getTransactionsByYear = async ({ year, month }) => {
  transactionInstance.defaults.headers.common.Authorization =
    instance.defaults.headers.common.Authorization;
  const { data } = await transactionInstance.get(`/transactions/total/${month}/${year}`);
  console.log(data);
  return data;
};
export default getTransactionsByYear;
