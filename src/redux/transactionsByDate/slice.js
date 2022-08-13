import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsByDate } from './operations';
const initialState = {
  loading: false,
  error: null,
  transactionsInfo: {},
};

const transactionsByDateSlice = createSlice({
  name: 'transactionsByYear',
  initialState,
  extraReducers: {
    [getTransactionsByDate.pending]: (store, _) => {
      store.loading = true;
      store.error = null;
    },
    [getTransactionsByDate.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.transactionsInfo = payload;
    },
    [getTransactionsByDate.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
      store.transactionsInfo = {};
    },
  },
});

const reducer = transactionsByDateSlice.reducer;
const actions = transactionsByDateSlice.actions;
const obj = { reducer, actions };
export default obj;
