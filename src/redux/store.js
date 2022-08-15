import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import persistedAuthReducer from './configs/auth';
import persistedBalanceReducer from './configs/balance';
import { transactionsApi } from './transactions/transactions';
import transactionsByYear from './transactionsByDate/slice';

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    balance: persistedBalanceReducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
    transactionsByDate: transactionsByYear.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    transactionsApi.middleware,
  ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
