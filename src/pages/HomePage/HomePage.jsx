import styles from './HomePage.module.scss';

import Transactions from 'components/Transactions';
import Header from '../../components/Header';

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Header />
        <section className={styles.section}>
          <h1 className={styles.title}>Home Page</h1>
          <Transactions />
        </section>
        <h1 className={styles.title}>Home Page</h1>
        <Transactions />

        <Link className={styles.link} to="/addtransaction">
          ADD TRANSACTION
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
