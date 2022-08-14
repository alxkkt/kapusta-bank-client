import styles from './Expenses.module.scss';
import sprite from '../../images/icons.svg';
import categoriesObject from './funcs/categories';
import expensesMarkup from './funcs/expensesMarkup';

const Expenses = ({ expenseTransactions }) => {

    const categoriesMarkup = expensesMarkup(categoriesObject(expenseTransactions));
    return <ul className={styles.ul}>{categoriesMarkup}</ul>;

};
export default Expenses;
