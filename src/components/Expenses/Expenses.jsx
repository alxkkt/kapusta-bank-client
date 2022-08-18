import styles from './Expenses.module.scss';
import sprite from '../../images/icons.svg';
import categoriesObject from './funcs/categories';
import expensesMarkup from './funcs/expensesMarkup';
import { useMemo } from 'react';
import phoneMarkupCallback from './funcs/phoneMarkupCallback';
import { useMediaQuery } from 'react-responsive';
import tabOrPcMarkup from './funcs/tabOrPcMarkup';

const Expenses = ({ expenseTransactions, children }) => {
  const isTabOrPc = useMediaQuery({ query: '(min-width:768px)' });
  const isPhone = useMediaQuery({ query: '(max-width:767.5px)' });
  const categoriesMarkup = expensesMarkup(
    categoriesObject(expenseTransactions)
  );

  const phoneMarkup = useMemo(
    () => (
      <div className={styles.mainDiv}>
        {phoneMarkupCallback(categoriesMarkup)}
      </div>
    ),
    [categoriesMarkup]
  );

  if (isTabOrPc) return tabOrPcMarkup(categoriesMarkup, children);

  if (isPhone) {
    console.log('phone markup');
    return phoneMarkup;
  }
};
export default Expenses;
