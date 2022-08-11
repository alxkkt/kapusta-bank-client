import styles from './AddTransactionPage.module.scss';
import { useState, useEffect, useRef } from 'react';
import AddTransactionForm from '../../components/AddTransactionForm';
import Calendar from 'components/Calendar';
import Icon from 'shared/components/Icon';
import { fetchTransaction } from 'shared/api/transactions';

import { Link } from 'react-router-dom';

const AddTransactionPage = () => {
  const [date, setDate] = useState(Date.now);
  const [transaction, setTransaction] = useState({});

  const firstRender = useRef(true);

  useEffect(() => {
    const resultFetch = async () => {
      if (!firstRender.current) {
        const result = await fetchTransaction(transaction);
        console.log(result);
      }
    };
    resultFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transaction]);

  const handleChange = date => {
    setDate(date);
  };

  const addTransaction = data => {
    const typeValue = data.category === 'Sallary' ? 'Income' : 'Expense';
    setTransaction({ ...data, date: date, type: typeValue });
  };
  console.log(transaction);
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
