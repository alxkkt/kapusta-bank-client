import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import DesktopTransactionList from './DesktopTransactionList';
import Modal from 'shared/components/Modal';
import MobileTransactionList from './MobileTransactionList';

import {
  useGetTransactionsQuery,
  useDeleteTransactionMutation,
} from '../../redux/transactions/transactions';

const TransactionsList = ({ date, transactionType }) => {
  const { data } = useGetTransactionsQuery();
  const [deleteTransaction] = useDeleteTransactionMutation();
  const [modalDelete, setModalDelete] = useState(false);
  const [transaction, setTransaction] = useState('');
  // const dispatch = useDispatch();
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

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
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
      {isMobile && (
        <MobileTransactionList
          filteredTransactions={filteredTransactions}
          handleDeleteClick={handleDeleteClick}
        />
      )}
      {isTablet && (
        <DesktopTransactionList
          filteredTransactions={filteredTransactions}
          handleDeleteClick={handleDeleteClick}
          day={day}
          month={month}
          year={year}
        />
      )}
      {isDesktop && (
        <DesktopTransactionList
          filteredTransactions={filteredTransactions}
          handleDeleteClick={handleDeleteClick}
          day={day}
          month={month}
          year={year}
        />
      )}
    </>
  );
};

export default TransactionsList;
