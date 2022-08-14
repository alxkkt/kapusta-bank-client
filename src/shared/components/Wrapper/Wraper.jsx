import styles from './wrapper.module.scss';

const Wrapper = ({ children }) => {
  return <div className={styles.background}>{children}</div>;
};

export default Wrapper;
