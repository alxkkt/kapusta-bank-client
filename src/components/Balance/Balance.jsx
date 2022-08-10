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
        {Number(balance) <= 0 && (
          <img className={styles.modal} src={modal} alt="modal" />
        )}

        <button className={styles.button} type="submit">
          CONFIRM
        </button>
      </form>
    </>
  );
};

export default Balance;
