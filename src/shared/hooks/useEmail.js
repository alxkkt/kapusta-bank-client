import { useSelector, shallowEqual } from 'react-redux';

import { isUserEmail } from '../../redux/auth/auth-selectors';

const useEmail = () => {
  const email = useSelector(isUserEmail, shallowEqual);

  return email;
};

export default useEmail;
