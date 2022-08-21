import styles from './Expenses.module.scss';
import categoriesObject from './funcs/categories';
import expensesMarkup from './funcs/expensesMarkup';
import { useMemo, useCallback } from 'react';
import phoneMarkupCallback from './funcs/phoneMarkupCallback';
import { useMediaQuery } from 'react-responsive';
import tabOrPcMarkup from './funcs/tabOrPcMarkup';

const Expenses = ({
  expenseTransactions,
  openCategory,
  setOpenCategory,
  children,
}) => {
  const isTabOrPc = useMediaQuery({ query: '(min-width:768px)' });
  const isPhone = useMediaQuery({ query: '(max-width:767.5px)' });
  const clickOnCategoryButton = useCallback(
    category => {
      setOpenCategory(category);
    },
    [setOpenCategory]
  );
  const categoriesMarkup = expensesMarkup(
    categoriesObject(expenseTransactions),
    clickOnCategoryButton,
    openCategory
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
    return phoneMarkup;
  }
};
export default Expenses;
