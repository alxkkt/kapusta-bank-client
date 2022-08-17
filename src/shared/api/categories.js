import instance from './auth';

export const getCategoriesList = async () => {
  const result = await instance.get('/categories/');

  return result;
};
