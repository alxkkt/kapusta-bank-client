import moment from 'moment';
import styles from './CurrentPeriod.module.scss';
// import icons from '../../images/icons.svg';
import { useState, useEffect } from 'react';
const CurrentPeriod = ({ period, setPeriod }) => {
  const [isCurrentMonth, setIsCurrentMonth] = useState(true);
  const onPrevClick = () => {
    setPeriod(period - 1);
  };
  const onNextClick = () => {
    setPeriod(period + 1);
  };
  useEffect(() => {
    if (period === moment().month()) setIsCurrentMonth(true);
    if (period < moment().month()) setIsCurrentMonth(false);
  }, [period]);
  return (
    <div>
      <p className={styles.writing}>Current period:</p>
      <div className={styles.div}>
        <button className={styles.button} onClick={onPrevClick}>
          &#60;
        </button>
        <p className={styles.date}>
          {moment().month(period).format('MMMM')}{' '}
          {moment().month(period).format('YYYY')}
        </p>
        <button
          disabled={isCurrentMonth}
          className={[styles.button, styles.nextButton].join(" ")}
          onClick={onNextClick}
        >
          &#62;
        </button>
      </div>
    </div>
  );
};
export default CurrentPeriod;
