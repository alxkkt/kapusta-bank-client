import { useState } from 'react';
import { Link } from 'react-router-dom';
// import moment from 'moment';
import ExpensesAndIncomesButtons from 'components/ExpensesAndIncomesButtons';
import TransactionsList from 'components/TransactionsList';
import Calendar from 'components/Calendar';
import Balance from 'components/Balance';
import ReportsIcon from 'shared/components/ReportsIcon';

import styles from './transactions.module.scss';

const Transactions = () => {
  const [date, setDate] = useState(Date.now());

  const handleChange = date => {
    setDate(date);
  };
  return (
    <>
      <Link className={styles.reports} to="/reports">
        <ReportsIcon />
      </Link>
      <Balance />
      <Link className={styles.link} to="/addtransaction">
        ADD TRANSACTION
      </Link>
      <Calendar startDate={date} onChange={handleChange} />
      <TransactionsList />
      <ExpensesAndIncomesButtons />
    </>
  );
};

export default Transactions;
