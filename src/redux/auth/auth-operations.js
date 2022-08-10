import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import * as services from 'shared/api/auth';

//registration

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data, { rejectWithValue }) => {
    try {
      const newUser = await services.signUp(data);
      Notify.success(
        'Вітаю, Ви успішно зареєструвалися, ви зможете увійти після підтвердження почти .'
      );
      return newUser;
    } catch (error) {
      Notify.failure('Нажаль, щось пішло не так, спробуйте ще!');
      return rejectWithValue(error);
    }
  }
);

//login
export const signIn = createAsyncThunk(
  'auth/signIn',
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const user = await services.signIn(data);
      Notify.success('Вітаю, Ви успішно залогінились!');
      return user;
    } catch (error) {
      Notify.failure('Нажаль, щось пішло не так, спробуйте ще!');
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const { token } = auth;
      const user = await services.getCurrentUser(token);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      const { token } = auth;
      if (!token) return false;
      return;
    },
  }
);

//logOut
export const logOut = createAsyncThunk('auth/logOut', async () => {
  await services.logOut;
  Notify.success('Вітаю, логаут здійснено!');
  return;
});
