import styles from './AddTransactionForm.module.scss';
import NumberFormat from 'react-number-format';
import Icon from 'shared/components/Icon';
import { useState, useRef } from 'react';

const AddTransactionForm = ({ onSubmit, date }) => {
  const [form, setForm] = useState({
    name: '',
    category: '',
    // date: '',
    sum: '',
  });

  const Ref = useRef();

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
      // date: '',
      sum: '',
    });
  };

  const handleClear = e => {
    Ref.current.elements.name.value = '';
    Ref.current.elements.category.value = '';
    Ref.current.elements.sum.value = '';
  };

  return (
    <form className={styles.form} action="" onSubmit={handleSubmit} ref={Ref}>
      <input
        className={styles.input}
        onChange={handleChange}
        name="name"
        type="text"
        placeholder="Product description"
      />
      <select
        className={styles.select}
        onChange={handleChange}
        name="category"
        id="category"
        defaultValue=""
      >
        <option value="" disabled>
          Product category
        </option>
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
      </select>
      <div className={styles.container}>
        <NumberFormat
          className={styles.sum}
          onChange={handleChange}
          name="sum"
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
