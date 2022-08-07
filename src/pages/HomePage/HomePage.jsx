import Balance from 'components/Balance';
import styles from './HomePage.module.scss';
import { Link } from 'react-router-dom';
import Vector from '../../shared/images/png/Vector.png';

const HomePage = () => {
  return (
    <section className={styles.homePage}>
      <h1 className={styles.hidden}>Home Page</h1>
      <Link className={styles.reports} to="/reports">
        <p className={styles.description}>Reports</p>
        <img className={styles.img} src={Vector} alt="Reports" />
      </Link>
      <Balance />
    </section>
  );
};

export default HomePage;
