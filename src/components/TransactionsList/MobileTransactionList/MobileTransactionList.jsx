import Icon from 'shared/components/Icon';

import styles from './mobileTransactionList.module.scss';

const MobileTransactionList = ({ filteredTransactions, handleDeleteClick }) => {
  return (
    <div>
      <ul>
        {filteredTransactions?.map(transaction => {
          return (
            <li>
              <div>
                <p>TransName</p>
                <p>date</p>
              </div>
              <p>category</p>
              <p>sum</p>
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileTransactionList;
