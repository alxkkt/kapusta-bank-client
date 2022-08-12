import styles from './AddTransactionPage.module.scss';
import { useState, useEffect, useRef } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import AddTransactionForm from '../../components/AddTransactionForm';
import Calendar from 'components/Calendar';
import Icon from 'shared/components/Icon';
import { fetchTransaction } from 'shared/api/transactions';
// import { transactionsApi } from 'redux/transactions/transactions';

import { Link } from 'react-router-dom';

const AddTransactionPage = () => {
  const [date, setDate] = useState(Date.now);
  const [transaction, setTransaction] = useState({});

  // const firstRender = useRef(true);
  // console.log(firstRender);

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
    const typeValue = data.category === 'Sallary' ? 'Income' : 'Expense';
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
    <section className={styles.section}>
      <div className="container">
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
      </div>
    </section>
  );
};

export default AddTransactionPage;
