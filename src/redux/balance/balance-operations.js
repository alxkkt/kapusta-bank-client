import { createAsyncThunk } from '@reduxjs/toolkit';

import * as services from '../../shared/api/balance';

// get balance
export const getBalance = createAsyncThunk(
  'balance/current',
  async (_, { rejectWithValue }) => {
    try {
      const balance = await services.getBalance();

      return balance;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// update balance
export const updateBalance = createAsyncThunk(
  'balance/update',
  async (data, { rejectWithValue }) => {
    try {
      const newBalance = await services.updateBalance(data);

      return newBalance;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
