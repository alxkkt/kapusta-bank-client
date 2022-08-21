import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import AddTransactionModal from 'components/AddTransactionModal';
import ExpensesAndIncomesButtons from 'components/ExpensesAndIncomesButtons';
import TransactionsList from 'components/TransactionsList';
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
  const [modalOpen, setModalOpen] = useState(false);

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

  console.log(modalOpen);
  const handleClick = e => {
    setTransactionType(e.target.dataset.type);
  };

  const handleChange = date => {
    setDate(date);
  };

  const openAddTransactionModal = () => {
    setModalOpen(prev => !prev);
  };

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <>
      {isMobile && (
        <>
          {modalOpen && (
            <AddTransactionModal
              closeModal={openAddTransactionModal}
              transactionType={transactionType}
              sendData={onFormSubmit}
            />
          )}
          <Link className={styles.reports} to="/reports">
            <ReportsIcon />
          </Link>
          <Balance state={balanceState} setNewState={setBalanceState} />
          <button className={styles.link} onClick={openAddTransactionModal}>
            ADD TRANSACTION
          </button>
          <Calendar startDate={date} onChange={handleChange} />
          <TransactionsList
            date={date}
            transactionType={transactionType}
            updateBalance={onFormSubmit}
          />
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
