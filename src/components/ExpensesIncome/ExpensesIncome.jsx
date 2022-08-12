import styles from './ExpensesIncome.module.scss';

const ExpensesIncome = ({ totalIncome, totalExpenses }) => {
  return (
    <div className={styles.mainDiv}>
      <div className={[styles.leftDiv, styles.innerDiv].join(' ')}>
        <p className={styles.expensesIncome}>Expenses:</p>
        <p className={[styles.number, styles.expenses].join(' ')}>
          -{totalExpenses} грн
        </p>
      </div>
      <div className={styles.innerDiv}>
        <p className={styles.expensesIncome}>Income:</p>
        <p className={[styles.number, styles.income].join(' ')}>
          +{totalIncome} грн
        </p>
      </div>
    </div>
  );
};
export default ExpensesIncome;
