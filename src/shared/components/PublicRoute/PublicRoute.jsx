import { Navigate, Outlet } from 'react-router-dom';

import useLogin from 'shared/hooks/isUserLogin';

const PublicRoute = () => {
  const isLogin = useLogin();

  if (isLogin) {
    return <Navigate replace to="/" />;
  }
  return <Outlet />;
};

export default PublicRoute;
