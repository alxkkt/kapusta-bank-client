// import styles from './ReportsPage.module.scss';
import CurrentPeriod from '../../components/CurrentPeriod';
import ExpensesIncomeSwitch from '../../components/ExpensesIncomeSwitch';
import ExpensesIncome from '../../components/ExpensesIncome';
import ReturnBackButton from '../../components/ReturnBackButton';
import Header from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsByDate } from '../../redux/transactionsByDate/operations';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { transactions } from '../../redux/transactionsByDate/selectors';

const ReportsPage = () => {
  const [period, setPeriod] = useState(moment().month());
  const [areExpensesOpen, setAreExpensesOpen] = useState(true);
  const transactionsInfo = useSelector(transactions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getTransactionsByDate({
        year: moment().month(period).year(),
        month: moment().month(period).month(),
      })
    );
  }, [dispatch, period]);

  return (
    <section>
      <Header />
      <div className="container">
        <div>
          <ReturnBackButton />
          <CurrentPeriod period={period} setPeriod={setPeriod} />
        </div>

        <ExpensesIncome
          totalIncome={transactionsInfo.totalIncome}
          totalExpenses={transactionsInfo.totalExpense}
        />
        <ExpensesIncomeSwitch
          areExpensesOpen={areExpensesOpen}
          switchExpenses={setAreExpensesOpen}
        />
      </div>
    </section>
  );
};

export default ReportsPage;
