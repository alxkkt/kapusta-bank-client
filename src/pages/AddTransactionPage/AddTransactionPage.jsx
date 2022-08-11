import styles from './AddTransactionPage.module.scss';
import { useState } from 'react';
import AddTransactionForm from '../../components/AddTransactionForm';
import Calendar from 'components/Calendar';
import Icon from 'shared/components/Icon';

import { Link } from 'react-router-dom';

const AddTransactionPage = () => {
  const [date, setDate] = useState(Date.now);
  const [transaction, setTransaction] = useState({});
  console.log(transaction);
  const handleChange = date => {
    setDate(date);
  };

  const addTransaction = data => {
    setTransaction({ ...data, date: date });
  };
  return (
    <div className="container">
      <section className={styles.section}>
        <Link className={styles.link} to="/">
          <Icon
            className={styles.img}
            width={24}
            height={24}
            name={`icon-backspace`}
          />
          {/* <img className={styles.img} src={Back} alt="Back" /> */}
        </Link>
        <div className={styles.calendar}>
          <Calendar startDate={date} onChange={handleChange} />
        </div>
        <AddTransactionForm onSubmit={addTransaction} date={date} />
      </section>
    </div>
  );
};

export default AddTransactionPage;
