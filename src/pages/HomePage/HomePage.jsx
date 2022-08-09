import styles from './HomePage.module.scss';

import Transactions from 'components/Transactions';

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <section className={styles.section}>
          <h1 className={styles.title}>Home Page</h1>
          <Transactions />
        </section>
        <Link className={styles.link} to="/addtransaction">
          ADD TRANSACTION
        </Link>
      </div>
    </>
  );
};

export default HomePage;
