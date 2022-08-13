import instance from './auth';
import { addToken } from './auth';

export const fetchTransaction = async body => {
  addToken(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjM4NDczMzlkNzQ2NjNmNmVkOTI1YSIsImlhdCI6MTY2MDQwNDY0OSwiZXhwIjoxNjYwNjYzODQ5fQ.w-TQnyLyHR_dlSVRV9FrzBWs19FEkZaaNLbfgPKC0gs'
  );
  const { data } = await instance.post('/transactions', body);
  return data;
};
