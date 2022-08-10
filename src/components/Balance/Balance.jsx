import { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';

import ModalBalance from './ModalBalance';

import styles from './balance.module.scss';

const Balance = () => {
  const [balance, setBalance] = useState('');
  const [isTooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    if (!+balance) {
      setTimeout(() => {
        setTooltipOpen(true);
      }, 500);
    }
  }, [balance]);

  const handleChange = e => {
    setBalance(e.target.value);
  };
  return (
    <div className={styles.container} onClick={() => setTooltipOpen(false)}>
      <p className={styles.balance}>Balance:</p>
      <form className={styles.form} action="">
        <NumberFormat
          className={styles.input}
          name="balance"
          type="text"
          value={balance}
          onChange={handleChange}
          thousandSeparator=" "
          decimalSeparator="."
          decimalScale={2}
          fixedDecimalScale={true}
          suffix="UAH"
          placeholder="00.00 UAH"
          minLength={1}
        />

        <button className={styles.button} type="submit">
          CONFIRM
        </button>
      </form>
      <ModalBalance isOpen={isTooltipOpen} />
    </div>
  );
};

export default Balance;
