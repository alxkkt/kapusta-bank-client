import styles from './HomePage.module.scss';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';

import Balance from 'components/Balance';
import { Link } from 'react-router-dom';
import Reports from '../../shared/images/png/Reports.png';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <section className={styles.section}>
          <h1 className={styles.title}>Home Page</h1>
          <Link className={styles.reports} to="/reports">
            <p className={styles.description}>Reports</p>
            <img className={styles.img} src={Reports} alt="Reports" />
          </Link>
          <Balance />
          {/* <DatePicker
            className={styles.datePicker}
            // name="startDate"
            // dateFormat="MM/dd/yyyy"
          /> */}
        </section>
        <Link className={styles.link} to="/addtransaction">
          ADD TRANSACTION
        </Link>
      </div>
    </>
  );
};

export default HomePage;
