import { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useMediaQuery } from 'react-responsive';

import Icon from 'shared/components/Icon';
import Calendar from 'components/Calendar';
import CategoriesList from './CategoriesList';

import { usePostTransactionMutation } from 'redux/transactions/transactions';

import styles from './AddTransactionForm.module.scss';

const AddTransactionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    sum: '',
  });
  const [date, setDate] = useState(Date.now());

  const [postTransaction, { isLoading, isSuccess, isError }] =
    usePostTransactionMutation();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const newValue = value.toLowerCase();
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const dataType =
      e.target.elements.category.value === 'income' ||
      e.target.elements.category.value === 'wages'
        ? 'income'
        : 'expense';
    const dataSum = Number.parseFloat(e.target.elements.sum.value);
    postTransaction({
      date,
      category: e.target.elements.category.value.toLowerCase(),
      description: e.target.elements.description.value,
      type: dataType,
      sum: dataSum,
    });

    isSuccess &&
      setFormData({
        description: '',
        category: '',
        sum: '',
      });
  };

  // const editToSend = ({ description, category, sum }) => {
  //   const typeValue =
  //     category === 'income' || category === 'wages' ? 'income' : 'expense';
  //   const sumToNumber = Number.parseFloat(sum);
  //   setTransaction({
  //     description,
  //     date,
  //     type: typeValue,
  //     sum: sumToNumber,
  //   });
  // };

  const handleClear = e => {
    setFormData({
      description: '',
      category: '',
      sum: '',
    });
  };

  const onChange = date => {
    setDate(date);
  };

  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const { description, sum } = formData;
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.tablet}>
        {isTablet && <Calendar startDate={date} onChange={onChange} />}
        {isDesktop && <Calendar startDate={date} onChange={onChange} />}
        <input
          className={styles.input}
          onChange={handleChange}
          name="description"
          value={description}
          type="text"
          placeholder="Product description"
        />
        <CategoriesList onChange={handleChange} />
        <div className={styles.containerForm}>
          <NumberFormat
            className={styles.sum}
            onChange={handleChange}
            name="sum"
            value={sum}
            type="text"
            decimalSeparator="."
            decimalScale={2}
            fixedDecimalScale={true}
            suffix=" UAH"
            placeholder="0.00"
            minLength={1}
          />
          <div className={styles.decoration}>
            <Icon width={20} height={20} name={`icon-calculator`} />
          </div>
        </div>
      </div>
      <div className={styles.containerBtn}>
        <button className={styles.inputBtn} type="submit">
          INPUT
        </button>
        <button className={styles.clearBtn} onClick={handleClear} type="button">
          CLEAR
        </button>
      </div>
    </form>
  );
};

export default AddTransactionForm;
