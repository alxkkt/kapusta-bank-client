import styles from './TransactionsList.module.scss';
import Icon from 'shared/components/Icon';

const TransactionsList = () => {
  return (
    <div className={styles.table_container}>
      <table className={styles.table}>
        <thead className={styles.table_header}>
          <tr>
            <th className={`${styles.table_th} ${styles.table_date}`}>Date</th>
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
        <table className={`${styles.table} ${styles.table_body_transactions}`}>
          <tbody className={styles.table_body}>
            <tr className={styles.table_transaction}>
              <td className={styles.table_date}>Some text</td>
              <td className={styles.table_description}>Some text</td>
              <td className={styles.table_category}>Some text</td>
              <td className={styles.table_sum}>Some text</td>
              <td className={styles.table_icon}>
                <button className={styles.delete_btn}>
                  <Icon
                    name={`icon-delete`}
                    width={18}
                    height={18}
                    className={`table_delete_icon`}
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsList;
