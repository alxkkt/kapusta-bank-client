import { useState } from 'react';
import styles from './TransactionsList.module.scss';
import Summary from './Summary';
import DesktopTransactionList from './DesktopTransactionList';
import Modal from 'shared/components/Modal';
import MobileTransactionList from './MobileTransactionList';

import {
  useGetTransactionsQuery,
  useDeleteTransactionMutation,
} from '../../redux/transactions/transactions';

const TransactionsList = ({ date, transactionType, updateBalance }) => {
  const [modalDelete, setModalDelete] = useState(false);
  const [transaction, setTransaction] = useState('');

  const handleDeleteClick = transaction => {
    setModalDelete(true);
    setTransaction(transaction._id);
  };

  const { data, isSuccess } = useGetTransactionsQuery();
  console.log(data);
  const [deleteTransaction] = useDeleteTransactionMutation();

  const onDeleteCancel = () => {
    setModalDelete(false);
    setTransaction('');
  };

  const onDeleteOk = async () => {
    setModalDelete(false);

    const transactionToDel = data.find(item => item._id === transaction);
    const { data: result } = await deleteTransaction(transactionToDel._id);

    updateBalance(null, true, result.newBalance);

    setTransaction('');
  };

  const filterType = data?.filter(item => item.type === transactionType);

  function pad(value) {
    return value.toString().padStart(2, 0);
  }
  const newDate = new Date(date);
  const day = pad(newDate.getDate());
  const month = pad(newDate.getMonth() + 1);
  const year = newDate.getFullYear();
  const calendarDate = `${day}.${month}.${year}`;
  const filteredTransactions = filterType?.filter(item => {
    const newTransactionDate = new Date(item.date);
    const transactionDay = pad(newTransactionDate.getDate());
    const transactionMonth = pad(newTransactionDate.getMonth() + 1);
    const transactionYear = newTransactionDate.getFullYear();
    const transactionDate = `${transactionDay}.${transactionMonth}.${transactionYear}`;
    return calendarDate === transactionDate;
  });

  return (
    <>
      {modalDelete && (
        <Modal
          title="Are you sure you want to delete this transaction?"
          onYes={onDeleteOk}
          onNo={onDeleteCancel}
        />
      )}
      <MobileTransactionList
        filteredTransactions={filteredTransactions}
        handleDeleteClick={handleDeleteClick}
        day={day}
        month={month}
        year={year}
        type={transactionType}
      />
      <div className={styles.container}>
        {isSuccess && (
          <DesktopTransactionList
            filteredTransactions={filteredTransactions}
            handleDeleteClick={handleDeleteClick}
            day={day}
            month={month}
            year={year}
            type={transactionType}
          />
        )}
        <Summary type={transactionType} />
      </div>
    </>
  );
};

export default TransactionsList;
