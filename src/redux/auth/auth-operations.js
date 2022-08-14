import { createAsyncThunk } from '@reduxjs/toolkit';

import * as services from 'shared/api/auth';

//registration

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data, { rejectWithValue }) => {
    try {
      const newUser = await services.signUp(data);

      return newUser;
    } catch (error) {
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

      return user;
    } catch (error) {
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
  await services.logOut();
  return;
});

export const getBalance = createAsyncThunk(
  'auth/balance',
  async (_, { rejectWithValue, getState }) => {
    try {
      // const { auth } = getState();
      // const { token } = auth;
      const balance = await services.getBalance();
      return balance;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateBalance = createAsyncThunk(
  'auth/balance',
  async (data, { rejectWithValue, getState }) => {
    try {
      // const { auth } = getState();
      // const { token } = auth;
      const balance = await services.updateBalance(data);
      return balance;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
