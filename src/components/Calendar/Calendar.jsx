import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import Icon from 'shared/components/Icon';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './calendar.module.scss';

const Calendar = ({ onChange, startDate }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Icon
          className={styles.calendarIcon}
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
          maxDate={Date.now()}
          required
        />
      </div>
    </div>
  );
};

export default Calendar;

Calendar.propTypes = {
  onChange: PropTypes.func.isRequired,
  startDate: PropTypes.number.isRequired,
};
