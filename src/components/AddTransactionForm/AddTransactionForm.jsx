import styles from './AddTransactionForm.module.scss';

import Calculator from '../../shared/images/png/calculator.png';

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
      </select>
      <div className={styles.container}>
        <input className={styles.sum} name="sum" placeholder="00.00UAH" />
        <div className={styles.decoration}>
          <img src={Calculator} alt="Calculator" />
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
