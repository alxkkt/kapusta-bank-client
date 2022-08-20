import styles from './summary.module.scss';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsByDate } from 'redux/transactionsByDate/operations';
import { transactions } from '../../../redux/transactionsByDate/selectors';
import { useGetSummaryByMonthQuery } from 'redux/transactions/transactions';

const Summary = ({ type }) => {
  const { data } = useGetSummaryByMonthQuery(type);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Summary</h2>
      <ul className={styles.list}>
        {data?.slice(-6).map(item => {
          return (
            <li className={styles.element} key={item.id}>
              <p className={styles.month}>
                {moment().month(item.month).format('MMMM')}
              </p>
              <p className={styles.sum}>
                {parseFloat(item.totalSum).toFixed(2)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Summary;
