import styles from './HomePage.module.scss';
import Transactions from 'components/Transactions/Transactions';
import Header from '../../components/Header';
// import TransactionsList from 'components/TransactionsList';
import Wrapper from 'shared/components/Wrapper';

const HomePage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <section className={styles.section}>
          <div className="container">
            <h1 className={styles.title}>Home Page</h1>
            <Transactions />
            {/* <TransactionsList /> */}
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default HomePage;
