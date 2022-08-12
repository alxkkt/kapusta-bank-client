import moment from 'moment';
import styles from './CurrentPeriod.module.scss';
import icons from '../../images/icons.svg';
import { useState } from 'react';
const CurrentPeriod = ({ period, setPeriod }) => {
  const onPrevClick = () => {
    setPeriod(period - 1);
  };
  const onNextClick = () => {
    setPeriod(period + 1);
  };
  return (
    <>
      <p className={styles.writing}>Current period:</p>
      <div className={styles.div}>
        <button className={styles.button} onClick={onPrevClick}>
          &#60;
        </button>
        <p className={styles.date}>
          {moment().month(period).format('MMMM')}{' '}
          {moment().month(period).format('YYYY')}
        </p>
        <button className={styles.button} onClick={onNextClick}>
          &#62;
        </button>
      </div>
    </>
  );
};
export default CurrentPeriod;