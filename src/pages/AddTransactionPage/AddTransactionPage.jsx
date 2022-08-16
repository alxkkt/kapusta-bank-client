import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Header from '../../components/Header';
import AddTransactionForm from '../../components/AddTransactionForm';
import Wrapper from 'shared/components/Wrapper';
import Calendar from 'components/Calendar';
import Icon from 'shared/components/Icon';

import styles from './AddTransactionPage.module.scss';

const AddTransactionPage = () => {
  const [date, setDate] = useState(Date.now);

  const handleChange = date => {
    setDate(date);
  };

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
                <AddTransactionForm />
              </div>
            </section>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default AddTransactionPage;
