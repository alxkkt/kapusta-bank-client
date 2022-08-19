import { useState } from 'react';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';

import { updateBalance } from 'redux/balance/balance-operations';

import ModalBalance from './ModalBalance';

import styles from './balance.module.scss';

const Balance = ({ state }) => {
  const [balanceState, setBalanceState] = useState('');

  const handleChange = ({ target }) => {
    setBalanceState(target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(updateBalance(Number.parseFloat(balanceState)));
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
            value={state}
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
        <ModalBalance balance={state} />
      </div>
    </div>
  );
};

export default Balance;
