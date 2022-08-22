import Icon from 'shared/components/Icon';

import styles from './mobileTransactionList.module.scss';

const MobileTransactionList = ({
  filteredTransactions,
  day,
  month,
  year,
  type,
  handleDeleteClick,
}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filteredTransactions?.map(transaction => {
          // console.log(transaction.sum);
          return (
            <li key={transaction._id} className={styles.transaction}>
              <div className={styles.transaction_container}>
                <p className={styles.description}>
                  {transaction.description.charAt(0).toUpperCase() +
                    transaction.description.slice(1)}
                </p>
                <p className={styles.date}>
                  {day}.{month}.{year}
                </p>
              </div>
              <p className={styles.category}>
                {transaction.category.charAt(0).toUpperCase() +
                  transaction.category.slice(1)}
              </p>
              <div className={styles.sumDelete}>
                <p
                  className={`${styles.sum} ${
                    type !== 'income' && styles.expense
                  }`}
                >
                  {type === 'income'
                    ? `${parseFloat(transaction.sum).toFixed(2)} грн.`
                    : `-${parseFloat(transaction.sum).toFixed(2)} грн.`}
                </p>
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
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileTransactionList;
