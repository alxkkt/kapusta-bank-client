import styles from './AddTransactionForm.module.scss';

import Icon from 'shared/components/Icon';

const AddTransactionForm = () => {
  return (
    <form className={styles.form} action="">
      <input
        className={styles.input}
        name="name"
        placeholder="Product description"
      />
      <select className={styles.select} name="category" id="category">
        <option value="" disabled selected>
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
        <input className={styles.sum} name="sum" placeholder="00.00UAH" />
        <div className={styles.decoration}>
          <Icon width={20} height={20} name={`icon-calculator`} />
        </div>
      </div>
      <div className={styles.containerBtn}>
        <button className={styles.inputBtn} type="submit">
          INPUT
        </button>
        <button className={styles.clearBtn} type="button">
          CLEAR
        </button>
      </div>
    </form>
  );
};

export default AddTransactionForm;
