import styles from './HomePage.module.scss';

import Transactions from 'components/Transactions';

import Header from '../../components/Header';
import TransactionsList from 'components/TransactionsList';

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className={styles.section}>
      <Header />
      <div className="container">
        <section className={styles.section}>
          <h1 className={styles.title}>Home Page</h1>
          <Transactions />
        </section>
        <Link className={styles.link} to="/addtransaction">
          ADD TRANSACTION
        </Link>
        <TransactionsList />
      </div>
    </section>
  );
};

export default HomePage;
