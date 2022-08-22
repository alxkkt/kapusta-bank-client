import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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

  const handleClick = e => {
    setTransactionType(e.target.dataset.type);
  };

  const handleChange = date => {
    setDate(date);
  };

  const openAddTransactionModal = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <>
      {modalOpen && (
        <AddTransactionModal
          closeModal={openAddTransactionModal}
          transactionType={transactionType}
          sendData={onFormSubmit}
        />
      )}
      <div className={styles.containerTablet}>
        <Link className={styles.reportsMobile} to="/reports">
          <ReportsIcon />
        </Link>
        <Balance state={balanceState} />
        <Link className={styles.reports} to="/reports">
          <ReportsIcon />
        </Link>
      </div>
      <button className={styles.link} onClick={openAddTransactionModal}>
        ADD TRANSACTION
      </button>
      <div className={styles.containerCalendar}>
        <Calendar startDate={date} onChange={handleChange} />
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
        <TransactionsList
          date={date}
          transactionType={transactionType}
          updateBalance={onFormSubmit}
        />
      </div>
      <div className={styles.listMobile}>
        <TransactionsList
          date={date}
          transactionType={transactionType}
          updateBalance={onFormSubmit}
        />
      </div>
      <img className={styles.cabages} src={Cabbages} alt="Cabages" />
    </>
  );
};

export default Transactions;
