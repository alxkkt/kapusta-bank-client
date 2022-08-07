import styles from './balance.module.scss';
const Balance = () => {
  return (
    <>
      <p className={styles.balance}>Balance:</p>
      <form className={styles.form} action="">
        <input className={styles.input} name="balance" value="00.00 UAH" />
        <button className={styles.button} type="submit">
          CONFIRM
        </button>
      </form>
    </>
  );
};

export default Balance;
