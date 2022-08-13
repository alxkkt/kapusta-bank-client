import instance from './auth';
import { addToken } from './auth';

export const fetchTransaction = async body => {
  addToken(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjM4NDczMzlkNzQ2NjNmNmVkOTI1YSIsImlhdCI6MTY2MDM4NTEwMSwiZXhwIjoxNjYwNjQ0MzAxfQ.56czaJv4sManIwE3qck8Exj9YYdrArfMpEZo861-z_8'
  );
  const { data } = await instance.post('/transactions', body);
  return data;
};
