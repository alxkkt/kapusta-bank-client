import { useSelector, shallowEqual } from 'react-redux';

import { getBalance } from 'redux/balance/balance-selectors';

const useBalance = () => {
  const totalBalance = useSelector(getBalance, shallowEqual);

  return totalBalance;
};

export default useBalance;
