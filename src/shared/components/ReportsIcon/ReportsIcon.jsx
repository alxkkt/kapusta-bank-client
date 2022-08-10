import styles from './ReportsIcon.module.scss';

const ReportsIcon = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>Reports</p>
      <div className={styles.wrapper}>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
      </div>
    </div>
  );
};

export default ReportsIcon;
