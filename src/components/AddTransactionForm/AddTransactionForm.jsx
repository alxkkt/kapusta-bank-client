import styles from './AddTransactionForm.module.scss';
import NumberFormat from 'react-number-format';
import Icon from 'shared/components/Icon';
import { useState } from 'react';

const AddTransactionForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    category: '',
    sum: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...form });
    setForm({
      name: '',
      category: '',
      type: '',
      sum: '',
    });
  };

  const handleClear = e => {
    setForm({
      name: '',
      category: '',
      sum: '',
    });
  };
  const { name, category, sum } = form;
  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <input
        className={styles.input}
        onChange={handleChange}
        name="name"
        value={name}
        type="text"
        placeholder="Product description"
      />
      <select
        className={styles.select}
        onChange={handleChange}
        name="category"
        value={category}
      >
        <option value="" disabled>
          Product category
        </option>
        <optgroup label="Expense" name="type">
          <option value="Health">Health</option>
          <option value="Alcohol">Alcohol</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Housing">Housing</option>
          <option value="Technique">Technique</option>
          <option value="Communal, Communications">
            Communal, Communications
          </option>
          <option value="Sports, Hobbies">Sports, Hobbies</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </optgroup>
        <optgroup label="Income" name="type">
          <option value="Sallary">Sallary</option>
        </optgroup>
      </select>
      <div className={styles.container}>
        <NumberFormat
          className={styles.sum}
          onChange={handleChange}
          name="sum"
          value={sum}
          type="text"
          thousandSeparator=" "
          decimalSeparator="."
          decimalScale={2}
          fixedDecimalScale={true}
          suffix=" UAH"
          placeholder="00.00 UAH"
          minLength={1}
        />
        <div className={styles.decoration}>
          <Icon width={20} height={20} name={`icon-calculator`} />
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
