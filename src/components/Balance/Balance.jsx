import styles from './balance.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getTotalBalance } from 'redux/auth/auth-selectors';
import NumberFormat from 'react-number-format';
import ModalBalance from './ModalBalance';
import { updateBalance } from 'redux/auth/auth-operations';

const Balance = () => {
  const [form, setForm] = useState();
  const balance = useSelector(getTotalBalance, shallowEqual);
  const [newBalance, setNewBalance] = useState('');

  const [tooltipStatus, setTooltipStatus] = useState({
    isOpen: false,
    isShown: false,
  });

  useEffect(() => {
    setNewBalance(balance);
    if (!+balance && !tooltipStatus.isShown) {
      setTimeout(() => {
        setTooltipStatus(prevState => ({ ...prevState, isOpen: true }));
      }, 500);
    }
  }, [balance, tooltipStatus.isShown]);

  // const updateTotalBalance = () => {};

  const handleChange = ({ target }) => {};

  const handleSubmit = e => {
    e.preventDefault();
    console.log(Number.parseFloat(form));
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
          value={newBalance}
          onChange={handleChange}
          // thousandSeparator=""
          decimalSeparator="."
          decimalScale={2}
          fixedDecimalScale={true}
          suffix="UAH"
          placeholder="00.00 UAH"
          minLength={1}
        />

        <button className={styles.button} type="submit" onClick={handleSubmit}>
          CONFIRM
        </button>
      </form>
      <ModalBalance isOpen={tooltipStatus.isOpen} />
    </div>
  );
};

export default Balance;
