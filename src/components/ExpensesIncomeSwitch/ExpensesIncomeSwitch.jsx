import styles from './ExpensesIncomeSwitch.module.scss';

const ExpensesIncomeSwitch = ({ switchExpenses, areExpensesOpen }) => {
  const onButtonClick = () => {
    switchExpenses(!areExpensesOpen);
  };
  return (
    <div className={styles.div}>
      <button className={styles.button} onClick={onButtonClick} type="button">
        &#60;
      </button>
      <p className={styles.text}>{areExpensesOpen ? 'Expenses' : 'Income'}</p>
      <button className={styles.button} onClick={onButtonClick} type="button">
        &#62;
      </button>
    </div>
  );
};

export default ExpensesIncomeSwitch;
