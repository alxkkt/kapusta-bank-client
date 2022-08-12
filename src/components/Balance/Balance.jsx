import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';

import ModalBalance from './ModalBalance';

import styles from './balance.module.scss';

const Balance = () => {
  // const [balance, setBalance] = useState('');
  const balance = useSelector(({ auth }) => auth.userData.totalBalance);
  console.log(balance);

  const [tooltipStatus, setTooltipStatus] = useState({
    isOpen: false,
    isShown: false,
  });

  useEffect(() => {
    if (!+balance && !tooltipStatus.isShown) {
      setTimeout(() => {
        setTooltipStatus(prevState => ({ ...prevState, isOpen: true }));
      }, 500);
    }
  }, [balance, tooltipStatus.isShown]);

  const handleChange = e => {
    // setBalance(e.target.value);
  };

  return (
    <div
      className={styles.container}
      onClick={() => setTooltipStatus({ isOpen: false, isShown: true })}
    >
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
      <ModalBalance isOpen={tooltipStatus.isOpen} />
    </div>
  );
};

export default Balance;
