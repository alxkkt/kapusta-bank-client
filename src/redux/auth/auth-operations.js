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
        ' You will receive an email in a few minutes, please verify your email to continue.'
      );
      return newUser;
    } catch (error) {
      Notify.failure('Something went wrong, please try again.');
      return rejectWithValue(error);
    }
  }
);

//login
export const signIn = createAsyncThunk(
  'auth/signIn',
  async (data, { rejectWithValue }) => {
    try {
      const user = await services.signIn(data);
      Notify.success('Welcome back!');
      return user;
    } catch (error) {
      Notify.failure('Something went wrong, please try again.');
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
  Notify.success('Goodbye! We hope to see you again.');
  return;
});
