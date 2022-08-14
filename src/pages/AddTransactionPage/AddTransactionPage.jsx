import styles from './AddTransactionPage.module.scss';
import { useState, useEffect } from 'react';
// import { useSelector, shallowEqual } from 'react-redux';

import AddTransactionForm from '../../components/AddTransactionForm';
import Calendar from 'components/Calendar';
import Icon from 'shared/components/Icon';
import { fetchTransaction } from 'shared/api/transactions';
// import { transactionsApi } from 'redux/transactions/transactions';

import Header from '../../components/Header';

import { Link } from 'react-router-dom';

const AddTransactionPage = () => {
  const [date, setDate] = useState(Date.now);
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    const resultFetch = async () => {
      const result = await fetchTransaction(transaction);
      console.log(result);
    };
    // resultFetch();
  }, [transaction]);

  const handleChange = date => {
    setDate(date);
  };

  const addTransaction = data => {
    const typeValue = data.category === 'sallary' ? 'income' : 'expense';
    const sumToNumber = Number.parseFloat(data.sum);
    return setTransaction({
      ...data,
      date: date,
      type: typeValue,
      sum: sumToNumber,
    });
  };

  console.log(transaction);
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
