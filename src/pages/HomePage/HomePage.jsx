import styles from './HomePage.module.scss';
import { useMediaQuery } from 'react-responsive';
// import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Transactions from 'components/Transactions';
import TransactionsList from 'components/TransactionsList';

import { Link } from 'react-router-dom';

const HomePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <section className={styles.section}>
      <div className="container">
        {isMobile && (
          <>
            <div className={styles.background}>
              <h1 className={styles.title}>Home Page</h1>
              <Transactions />
            </div>
            <Link className={styles.link} to="/addtransaction">
              ADD TRANSACTION
            </Link>

            <TransactionsList />
          </>
        )}
      </div>
    </section>
  );
};

export default HomePage;
