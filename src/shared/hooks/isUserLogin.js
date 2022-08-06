import { useSelector, shallowEqual } from 'react-redux';

import { isUserLogin } from '../../redux/auth/auth-selectors';

const useLogin = () => {
  const isLogin = useSelector(isUserLogin, shallowEqual);

  return isLogin;
};

export default useLogin;
