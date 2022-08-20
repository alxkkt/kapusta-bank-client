import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import ExpensesAndIncomesButtons from 'components/ExpensesAndIncomesButtons';
import Calendar from 'components/Calendar';
import Balance from 'components/Balance';
import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import ReportsIcon from 'shared/components/ReportsIcon';
import Cabbages from '../../shared/images/svg/Cabages.svg';
import { usePostTransactionMutation } from 'redux/transactions/transactions';
import useBalance from 'shared/hooks/useBalance';

import styles from './transactions.module.scss';

const Transactions = () => {
  const [date, setDate] = useState(Date.now());
  const [transactionType, setTransactionType] = useState('expense');
  const [balanceState, setBalanceState] = useState('');

  const [postTransaction] = usePostTransactionMutation();

  const dispatch = useDispatch();
  const balance = useBalance();

  useEffect(() => {
    setBalanceState(balance);
  }, [dispatch, balance]);

  const onFormSubmit = async (transaction, isDelete, newBalance) => {
    if (isDelete) {
      setBalanceState(newBalance);
      return;
    }
    const { data } = await postTransaction(transaction);

    setBalanceState(data.totalBalance);
  };

  const handleClick = e => {
    setTransactionType(e.target.dataset.type);
  };

  const handleChange = date => {
    setDate(date);
  };

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <>
      {isMobile && (
        <>
          <Link className={styles.reports} to="/reports">
            <ReportsIcon />
          </Link>
          <Balance state={balanceState} setNewState={setBalanceState} />
          <Link className={styles.link} to="/addtransaction">
            ADD TRANSACTION
          </Link>
          <Calendar startDate={date} onChange={handleChange} />
          <ExpensesAndIncomesButtons
            isActive={transactionType}
            onClick={handleClick}
          />
        </>
      )}
      {isTablet && (
        <>
          <div className={styles.containerTablet}>
            <Balance state={balanceState} />
            <Link className={styles.reports} to="/reports">
              <ReportsIcon />
            </Link>
          </div>
          <ExpensesAndIncomesButtons
            isActive={transactionType}
            onClick={handleClick}
          />
          <div className={styles.containerTable}>
            {/* {isMobile && <Calendar startDate={date} onChange={handleChange} />} */}
            <AddTransactionForm
              transactionType={transactionType}
              sendData={onFormSubmit}
            />
          </div>
          <img className={styles.cabages} src={Cabbages} alt="Cabages" />
        </>
      )}
      {isDesktop && (
        <>
          <div className={styles.containerTablet}>
            <Balance state={balanceState} />
            <Link className={styles.reports} to="/reports">
              <ReportsIcon />
            </Link>
          </div>
          <ExpensesAndIncomesButtons
            isActive={transactionType}
            onClick={handleClick}
          />
          <div className={styles.containerTable}>
            {/* {isMobile && <Calendar startDate={date} onChange={handleChange} />} */}
            <AddTransactionForm
              transactionType={transactionType}
              sendData={onFormSubmit}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Transactions;
