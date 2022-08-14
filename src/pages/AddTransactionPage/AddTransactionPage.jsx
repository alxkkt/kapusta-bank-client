import styles from './AddTransactionPage.module.scss';
import { useState } from 'react';
import AddTransactionForm from '../../components/AddTransactionForm';
import Calendar from 'components/Calendar';
import Icon from 'shared/components/Icon';

import Header from '../../components/Header';

import { Link } from 'react-router-dom';

const AddTransactionPage = () => {
  const [date, setDate] = useState(Date.now);
  const handleChange = date => {
    setDate(date);
  };
  return (
    <div>
      <Header />
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
          <AddTransactionForm />
        </section>
      </div>
    </div>
  );
};

export default AddTransactionPage;
