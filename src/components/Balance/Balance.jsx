import styles from './balance.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getTotalBalance } from 'redux/auth/auth-selectors';
import NumberFormat from 'react-number-format';
import ModalBalance from './ModalBalance';
import { updateBalance, getBalance } from 'redux/auth/auth-operations';
// import { updateBalance } from 'shared/api/auth';

const Balance = () => {
  const balance = useSelector(getTotalBalance, shallowEqual);
  const [balanceState, setBalanceState] = useState('');
  const dispatch = useDispatch();

  const [tooltipStatus, setTooltipStatus] = useState({
    isOpen: false,
    isShown: false,
  });

  // useEffect(() => {
  //   dispatch(getBalance());
  // }, [dispatch]);

  useEffect(() => {
    // setBalanceState(balance);
    if (!+balanceState && !tooltipStatus.isShown) {
      setTimeout(() => {
        setTooltipStatus(prevState => ({ ...prevState, isOpen: true }));
      }, 500);
    }
  }, [balanceState, tooltipStatus.isShown]);

  const handleChange = ({ target }) => {
    setBalanceState(target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(updateBalance(Number.parseFloat(balanceState)));
  };

  return (
    <div
      className={styles.container}
      onClick={() => setTooltipStatus({ isOpen: false, isShown: true })}
    >
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
            placeholder="00.00 UAH"
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
      </div>
      <ModalBalance isOpen={tooltipStatus.isOpen} />
    </div>
  );
};

export default Balance;
