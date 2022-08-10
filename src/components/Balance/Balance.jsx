import styles from './balance.module.scss';
import NumberFormat from 'react-number-format';
import { useState } from 'react';
import modal from '../../shared/images/png/modalBalance.png';
// import ModalBalance from './ModalBalance';

const Balance = () => {
  const [balance, setBalance] = useState('');

  const handleChange = e => {
    setBalance(e.target.value);
  };
  return (
    <>
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

      <div className={styles.modalContainer}>
        <div className={styles.triangle}></div>
        <div className={styles.tooltipContainer}>
          <p className={styles.strongSign}>
            Hello! To get started, enter the current balance of your account!
          </p>
          <p className={styles.smallSign}>
            You can't spend money until you have it :)
          </p>
        </div>
      </div>
    </>
  );
};

export default Balance;
