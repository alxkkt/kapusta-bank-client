import styles from './AddTransactionPage.module.scss';
import { useState, useEffect } from 'react';
// import { useSelector, shallowEqual } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import AddTransactionForm from '../../components/AddTransactionForm';
import Calendar from 'components/Calendar';
import Icon from 'shared/components/Icon';
import { fetchTransaction } from 'shared/api/transactions';
// import { transactionsApi } from 'redux/transactions/transactions';

import Header from '../../components/Header';

import { Link } from 'react-router-dom';
import Wrapper from 'shared/components/Wrapper';

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
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <>
      {isMobile && (
        <>
          <Header />
          <Wrapper>
            <section className={styles.section}>
              <div className="container">
                <Link className={styles.link} to="/">
                  <Icon
                    className={styles.img}
                    width={24}
                    height={24}
                    name={`icon-backspace`}
                  />
                </Link>
                <div className={styles.calendar}>
                  <Calendar startDate={date} onChange={handleChange} />
                </div>
                <AddTransactionForm onSubmit={addTransaction} />
              </div>
            </section>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default AddTransactionPage;
