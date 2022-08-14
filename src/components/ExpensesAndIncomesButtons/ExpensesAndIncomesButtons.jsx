import styles from './ExpensesAndIncomesButtons.module.scss';

const ExpensesAndIncomesButtons = ({ onClick, isActive }) => {
  return (
    <div className={styles.containerBtn}>
      <button
        onClick={onClick}
        className={styles.button}
        // className={`${isActive === 'expenses' ? styles.active : styles.button}`}
        data-name="expenses"
        type="button"
      >
        Expenses
      </button>
      <button
        onClick={onClick}
        className={styles.button}
        // className={`${isActive !== 'expenses' ? styles.active : styles.button}`}
        data-name="income"
        type="button"
      >
        Income
      </button>
    </div>
  );
};

export default ExpensesAndIncomesButtons;
