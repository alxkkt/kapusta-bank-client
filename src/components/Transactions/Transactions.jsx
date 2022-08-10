import styles from './transactions.module.scss';
import Calendar from 'components/Calendar';
import Balance from 'components/Balance';

// import moment from 'moment';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReportsIcon from 'shared/components/ReportsIcon';

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
      <Calendar startDate={date} onChange={handleChange} />
    </>
  );
};

export default Transactions;
