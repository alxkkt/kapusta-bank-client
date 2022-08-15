import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';

import { getBalance, updateBalance } from 'redux/balance/balance-operations';
import useBalance from 'shared/hooks/useBalance';

import ModalBalance from './ModalBalance';

import styles from './balance.module.scss';

const Balance = () => {
  const [balanceState, setBalanceState] = useState('');

  const dispatch = useDispatch();
  const balance = useBalance();

  useEffect(() => {
    dispatch(getBalance());
    setBalanceState(balance);
  }, [dispatch, balance]);

  const handleChange = ({ target }) => {
    setBalanceState(target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(updateBalance(Number.parseFloat(balanceState)));
  };

  return (
    <div className={styles.container}>
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

        <button className={styles.button} type="submit" onClick={handleSubmit}>
          CONFIRM
        </button>
      </form>
      <ModalBalance balance={balance} />
    </div>
  );
};

export default Balance;
