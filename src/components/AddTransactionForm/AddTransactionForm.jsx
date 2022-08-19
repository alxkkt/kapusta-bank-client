import { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Icon from 'shared/components/Icon';
import Calendar from 'components/Calendar';
import CategoriesList from './CategoriesList';
import TransactionsList from 'components/TransactionsList';

import styles from './AddTransactionForm.module.scss';

const AddTransactionForm = ({ transactionType, sendData }) => {
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    sum: '',
  });
  const [date, setDate] = useState(Date.now());

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const newValue = value.toLowerCase();
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formElements = e.target.elements;
    const dataType =
      formElements.category.value.toLowerCase() === 'income' ||
      formElements.category.value.toLowerCase() === 'wages'
        ? 'income'
        : 'expense';
    const dataSum = Number.parseFloat(formElements.sum.value);

    sendData(
      {
        date,
        category: formElements.category.value.toLowerCase(),
        description: formElements.description.value,
        type: dataType,
        sum: dataSum,
      },
      false
    );

    setFormData({
      description: '',
      category: '',
      sum: '',
    });
    if (isMobile) navigate('/');
  };

  const handleClear = () => {
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
    <>
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
            required
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
          <button
            className={styles.clearBtn}
            onClick={handleClear}
            type="button"
          >
            CLEAR
          </button>
        </div>
      </form>
      <TransactionsList
        date={date}
        transactionType={transactionType}
        updateBalance={sendData}
      />
    </>
  );
};

export default AddTransactionForm;

AddTransactionForm.propTypes = {
  transactionType: PropTypes.string.isRequired,
  sendData: PropTypes.func.isRequired,
};
