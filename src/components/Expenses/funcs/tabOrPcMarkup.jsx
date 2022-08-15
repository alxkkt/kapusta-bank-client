import styles from '../Expenses.module.scss';

const tabOrPcMarkup = (categoriesMarkup, switcher) => {
  return (
    <div className={styles.mainDivPc}>
      {switcher}
      <ul className={styles.divPc}>{categoriesMarkup}</ul>
    </div>
  );
};
export default tabOrPcMarkup;
