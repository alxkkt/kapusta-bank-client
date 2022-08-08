import styles from './AddTransactionPage.module.scss';
import { useState } from 'react';
import AddTransactionForm from '../../components/AddTransactionForm';
import Calendar from 'components/Calendar';

import { Link } from 'react-router-dom';
import Back from '../../shared/images/png/Back.png';

const AddTransactionPage = () => {
  const [date, setDate] = useState(Date.now);
  const handleChange = date => {
    setDate(date);
  };
  return (
    <div className="container">
      <section className={styles.section}>
        <Link className={styles.link} to="/">
          <img className={styles.img} src={Back} alt="Back" />
        </Link>
        <div className={styles.calendar}>
          <Calendar startDate={date} onChange={handleChange} />
        </div>
        <AddTransactionForm />
      </section>
    </div>
  );
};

export default AddTransactionPage;
