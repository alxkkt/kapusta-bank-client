import styles from './ExpensesAndIncomesButtons.module.scss';

const ExpensesAndIncomesButtons = ({ isActive, onClick }) => {
  return (
    <div className={styles.containerBtn}>
      <button
        onClick={onClick}
        // className={styles.button}
        className={`${isActive === 'expense' ? styles.active : styles.button}`}
        data-type="expense"
        type="button"
      >
        Expenses
      </button>
      <button
        onClick={onClick}
        // className={styles.button}
        className={`${isActive !== 'expense' ? styles.active : styles.button}`}
        data-type="income"
        type="button"
      >
        Income
      </button>
    </div>
  );
};

export default ExpensesAndIncomesButtons;
