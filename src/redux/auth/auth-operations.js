import { createAsyncThunk } from '@reduxjs/toolkit';
import * as services from '../../shared/api/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const user = await services.signup(data);

      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const user = await services.login(data);

      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const { token } = user;
      const data = await services.getCurrent(token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { user } = getState();
      if (!user.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const user = await services.logout();

      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);