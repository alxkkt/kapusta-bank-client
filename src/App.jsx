import './App.scss';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operations';

import MyRoutes from './Routes';

import AuthPage from 'pages/AuthPage';
import HomePage from 'pages/HomePage';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {/* <MyRoutes /> */}
      <AuthPage />
      {/* <HomePage /> */}
    </div>
  );
};

export default App;
