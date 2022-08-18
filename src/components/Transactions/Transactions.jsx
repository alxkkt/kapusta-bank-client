import styles from './transactions.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import moment from 'moment';
import ExpensesAndIncomesButtons from 'components/ExpensesAndIncomesButtons';
import Calendar from 'components/Calendar';
import Balance from 'components/Balance';
import ReportsIcon from 'shared/components/ReportsIcon';
import { useMediaQuery } from 'react-responsive';
import Cabbages from '../../shared/images/svg/Cabages.svg';
import AddTransactionForm from 'components/AddTransactionForm';

const Transactions = () => {
  const [date, setDate] = useState(Date.now());
  const [transactionType, setTransactionType] = useState('expense');
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
          <Balance />
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
            <Balance />
            <Link className={styles.reports} to="/reports">
              <ReportsIcon />
            </Link>
          </div>
          <ExpensesAndIncomesButtons
            isActive={transactionType}
            onClick={handleClick}
          />
          <div className={styles.containerTable}>
            {isMobile && <Calendar startDate={date} onChange={handleChange} />}
            <AddTransactionForm transactionType={transactionType} />
          </div>
          <img className={styles.cabages} src={Cabbages} alt="Cabages" />
        </>
      )}
      {isDesktop && (
        <>
          <div className={styles.containerTablet}>
            <Balance />
            <Link className={styles.reports} to="/reports">
              <ReportsIcon />
            </Link>
          </div>
          <ExpensesAndIncomesButtons
            isActive={transactionType}
            onClick={handleClick}
          />
          <div className={styles.containerTable}>
            {isMobile && <Calendar startDate={date} onChange={handleChange} />}
            <AddTransactionForm transactionType={transactionType} />
          </div>
        </>
      )}
    </>
  );
};

export default Transactions;
