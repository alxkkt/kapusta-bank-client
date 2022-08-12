import instance from './auth';
import { addToken } from './auth';

export const fetchTransaction = async body => {
  addToken(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjM4NDczMzlkNzQ2NjNmNmVkOTI1YSIsImlhdCI6MTY2MDI0Njc3MCwiZXhwIjoxNjYwNTA1OTcwfQ.Vs6436js6tDvflzmasee1C2MotWKJ_Gs3MVd-yvXmJo'
  );
  const { data } = await instance.post('/transactions', body);
  return data;
};
