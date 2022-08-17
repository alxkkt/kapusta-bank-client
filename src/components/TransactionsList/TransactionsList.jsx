import { createContext, useEffect, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';

import styles from './TransactionsList.module.scss';
import Icon from 'shared/components/Icon';
import Modal from 'shared/components/Modal';

import {
  useGetTransactionsQuery,
  useDeleteTransactionMutation,
} from '../../redux/transactions/transactions';

const TransactionsList = ({ date }) => {
  const { data, error, isLoading } = useGetTransactionsQuery();
  const [deleteTransaction] = useDeleteTransactionMutation();
  const [modalDelete, setModalDelete] = useState(false);
  const [transaction, setTransaction] = useState('');

  const dispatch = useDispatch();

  const handleDeleteClick = transaction => {
    setModalDelete(true);
    setTransaction(transaction._id);
  };

  const onDeleteCancel = () => {
    setModalDelete(false);
    setTransaction('');
  };

  const onDeleteOk = () => {
    setModalDelete(false);
    const transactionToDel = data.find(item => item._id === transaction);
    deleteTransaction(transactionToDel._id);
    setTransaction('');
  };

  return (
    <>
      {' '}
      {modalDelete && (
        <Modal
          title="Are you sure you want to delete this transaction?"
          onYes={onDeleteOk}
          onNo={onDeleteCancel}
        />
      )}
      <div className={styles.table_container}>
        <table className={styles.table}>
          <thead className={styles.table_header}>
            <tr>
              <th className={`${styles.table_th} ${styles.table_date}`}>
                Date
              </th>
              <th className={`${styles.table_th} ${styles.table_description}`}>
                Description
              </th>
              <th className={`${styles.table_th} ${styles.table_category}`}>
                Category
              </th>
              <th className={`${styles.table_th} ${styles.table_sum}`}>Sum</th>
              <th className={`${styles.table_th} ${styles.table_icon}`}></th>
            </tr>
          </thead>
        </table>
        <div className={styles.table_scroll}>
          <table
            className={`${styles.table} ${styles.table_body_transactions}`}
          >
            <tbody className={styles.table_body}>
              {data?.map(transaction => {
                function pad(value) {
                  return value.toString().padStart(2, 0);
                }
                const newDate = new Date(transaction.date);
                const day = pad(newDate.getDate());
                const month = pad(newDate.getMonth());
                const year = newDate.getFullYear();
                return (
                  <tr
                    key={transaction._id}
                    className={styles.table_transaction}
                  >
                    <td className={styles.table_date}>
                      {day}.{month}.{year}
                    </td>
                    <td className={styles.table_description}>
                      {transaction.description}
                    </td>
                    <td className={styles.table_category}>
                      {transaction.category}
                    </td>
                    <td className={styles.table_sum}>{transaction.sum}</td>
                    <td className={styles.table_icon}>
                      <button
                        className={styles.delete_btn}
                        onClick={() => handleDeleteClick(transaction)}
                      >
                        <Icon
                          name={`icon-delete`}
                          width={18}
                          height={18}
                          className={`table_delete_icon`}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TransactionsList;
