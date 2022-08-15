import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import authReducer from '../auth/auth-slice';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export default persistedAuthReducer;
