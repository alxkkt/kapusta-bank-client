import styles from './HomePage.module.scss';
import { useMediaQuery } from 'react-responsive';
// import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Transactions from 'components/Transactions';
import Header from '../../components/Header';
// import TransactionsList from 'components/TransactionsList';
import Wrapper from 'shared/components/Wrapper';

const HomePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <Wrapper>
      <Header />
      <section className={styles.section}>
        <div className="container">
          <h1 className={styles.title}>Home Page</h1>
          <Transactions />
          {/* <TransactionsList /> */}
        </div>
      </section>
    </Wrapper>
  );
};

export default HomePage;
