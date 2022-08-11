import styles from './calendar.module.scss';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Icon from 'shared/components/Icon';

const Calendar = ({ onChange, startDate }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Icon
          className={styles.img}
          name={`icon-calendar`}
          width={20}
          height={20}
        />
      </div>
      <div>
        <DatePicker
          className={styles.datePicker}
          name="date"
          dateFormat="dd.MM.yyyy"
          selected={startDate}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
};

export default Calendar;
