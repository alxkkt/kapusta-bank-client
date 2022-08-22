import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getCategoriesList } from 'shared/api/categories';

import styles from './CategoriesList.module.scss';

const CategoriesList = ({ onChange }) => {
  const [expensesList, setExpensesList] = useState([]);
  const [incomeList, setIncomeList] = useState([]);

  const fetchData = async () => {
    const { data } = await getCategoriesList();

    const expenses = [...data]?.filter(
      ({ name }) => name !== 'wages' && name !== 'income'
    );
    setExpensesList(expenses);
    const incomes = [...data]?.filter(
      ({ name }) => name === 'income' || name === 'wages'
    );
    setIncomeList(incomes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const capitalize = name => {
    const capLetter = name[0].toUpperCase();
    const text = name.slice(1, name.length);

    return capLetter + text;
  };

  const expenseElements = expensesList?.map(({ name, _id }) => {
    return (
      <option key={_id} value={capitalize(name)}>
        {capitalize(name)}
      </option>
    );
  });
  const incomeElements = incomeList?.map(({ name, _id }) => {
    return (
      <option key={_id} value={capitalize(name)}>
        {capitalize(name)}
      </option>
    );
  });

  return (
    <select
      className={styles.select}
      onChange={onChange}
      name="category"
      required
    >
      <option value="">Product category</option>
      <optgroup label="Expense" name="type">
        {expenseElements}
      </optgroup>
      <optgroup label="Income" name="type">
        {incomeElements}
      </optgroup>
    </select>
  );
};

export default CategoriesList;

CategoriesList.propTypes = {
  onChange: PropTypes.func.isRequired,
};
