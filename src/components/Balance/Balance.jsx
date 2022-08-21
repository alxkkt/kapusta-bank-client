import { useState } from 'react';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

import { updateBalance } from 'redux/balance/balance-operations';

import ModalBalance from './ModalBalance';

import styles from './balance.module.scss';
import { useEffect } from 'react';
import useBalance from 'shared/hooks/useBalance';
import { getBalance } from 'redux/balance/balance-operations';

const Balance = ({ state }) => {
  const [balanceState, setBalanceState] = useState('');

  const dispatch = useDispatch();
  const balance = useBalance();

  useEffect(() => {
    dispatch(getBalance());

    setBalanceState(state);
  }, [state, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(updateBalance(Number.parseFloat(balanceState)));
  };

  const handleChange = ({ target }) => {
    setBalanceState(target.value);
  };

  return (
    <div className={styles.containerBalance}>
      <div className={styles.containerTablet}>
        <p className={styles.balance}>Balance:</p>
        <form className={styles.form} action="">
          <NumberFormat
            className={styles.input}
            name="balance"
            type="text"
            value={balanceState}
            onChange={handleChange}
            // thousandSeparator=""
            decimalSeparator="."
            decimalScale={2}
            fixedDecimalScale={true}
            suffix="UAH"
            placeholder="0.00 UAH"
            minLength={1}
          />

          <button
            className={styles.button}
            type="submit"
            onClick={handleSubmit}
          >
            CONFIRM
          </button>
        </form>
        <ModalBalance balance={balance} />
      </div>
    </div>
  );
};

export default Balance;

Balance.propTypes = {
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
