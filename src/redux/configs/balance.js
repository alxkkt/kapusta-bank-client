import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import balanceReducer from '../balance/balance-slice';

const persistBalanceConfig = {
  key: 'balance',
  storage,
  whiteList: ['balance'],
};

const persistedBalanceReducer = persistReducer(
  persistBalanceConfig,
  balanceReducer
);

export default persistedBalanceReducer;
