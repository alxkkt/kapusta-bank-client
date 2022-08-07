import Balance from 'components/Balance';
import styles from './HomePage.module.scss';
import { Link } from 'react-router-dom';
import Reports from '../../shared/images/png/Reports.png';

const HomePage = () => {
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.title}>Home Page</h1>
        <Link className={styles.reports} to="/reports">
          <p className={styles.description}>Reports</p>
          <img className={styles.img} src={Reports} alt="Reports" />
        </Link>
        <Balance />
      </section>
      <Link className={styles.link} to="/addtransaction">
        ADD TRANSACTION
      </Link>
    </>
  );
};

export default HomePage;
