import { createSlice } from '@reduxjs/toolkit';

import { getBalance, updateBalance } from './balance-operations';

const initialState = {
  totalBalance: 0,
  loading: false,
  error: null,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  extraReducers: {
    // get current balance
    [getBalance.pending]: (store, _) => ({ ...store, loading: true }),
    [getBalance.fulfilled]: (store, { payload }) => ({
      ...store,
      ...payload,
      loading: false,
    }),
    [getBalance.rejected]: (_, { payload }) => ({
      ...initialState,
      loading: false,
      error: payload,
    }),
    // update users balance
    [updateBalance.pending]: (store, _) => ({ ...store, loading: true }),
    [updateBalance.fulfilled]: (store, { payload }) => ({
      ...store,
      ...payload,
      loading: false,
    }),
    [updateBalance.rejected]: (_, { payload }) => ({
      ...initialState,
      loading: false,
      error: payload,
    }),
  },
});

export default balanceSlice.reducer;
