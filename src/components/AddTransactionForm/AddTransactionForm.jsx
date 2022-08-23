import { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

import Icon from 'shared/components/Icon';
import Calendar from 'components/Calendar';
import CategoriesList from './CategoriesList';
import TransactionsList from 'components/TransactionsList';

import styles from './AddTransactionForm.module.scss';

const AddTransactionForm = ({ sendData, closeModal, transactionType }) => {
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    sum: '',
  });
  const [date, setDate] = useState(Date.now());

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

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
    if (isMobile) closeModal();
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

  const { description, sum } = formData;
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.desktop}>
          <div className={styles.tablet}>
            <Calendar startDate={date} onChange={onChange} />
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
        </div>
        <TransactionsList
          date={date}
          transactionType={transactionType}
          updateBalance={sendData}
        />
      </form>
    </>
  );
};

export default AddTransactionForm;

AddTransactionForm.propTypes = {
  sendData: PropTypes.func.isRequired,
  closeModal: PropTypes.func,
};
