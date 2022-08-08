import styles from './calendar.module.scss';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import CalendarImg from '../../shared/images/png/Calendar.png';

const Calendar = ({ onChange, startDate }) => {
  return (
    <>
      {' '}
      <img className={styles.img} src={CalendarImg} alt="calendar" />
      <DatePicker
        className={styles.datePicker}
        name="date"
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={onChange}
        required
      />
    </>
  );
};

export default Calendar;
