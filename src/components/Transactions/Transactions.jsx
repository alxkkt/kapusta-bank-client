import styles from './transactions.module.scss';
import Calendar from 'components/Calendar';
import Balance from 'components/Balance';

// import moment from 'moment';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reports from '../../shared/images/png/Reports.png';

const Transactions = () => {
  const [date, setDate] = useState(Date.now());

  const handleChange = date => {
    setDate(date);
  };
  return (
    <>
      {' '}
      <Link className={styles.reports} to="/reports">
        <p className={styles.description}>Reports</p>
        <img className={styles.img} src={Reports} alt="Reports" />
      </Link>
      <Balance />
      <Calendar startDate={date} onChange={handleChange} />
    </>
  );
};

export default Transactions;
