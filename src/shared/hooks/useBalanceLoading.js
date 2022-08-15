import { useSelector, shallowEqual } from 'react-redux';

import { isBalanceLoading } from 'redux/balance/balance-selectors';

const useBalanceLoading = () => {
  const isLoading = useSelector(isBalanceLoading, shallowEqual);

  return isLoading;
};

export default useBalanceLoading;
