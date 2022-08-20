import styles from './ReportsPage.module.scss';
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
import Expenses from '../../components/Expenses';
import Wrapper from 'shared/components/Wrapper';
import { useMediaQuery } from 'react-responsive';
import Chart from '../../components/Chart';

const ReportsPage = () => {
  const isTabOrPc = useMediaQuery({ query: '(min-width:768px)' });
  const [period, setPeriod] = useState(moment().month());
  const [areExpensesOpen, setAreExpensesOpen] = useState(true);
  const [openCategory, setOpenCategory] = useState('');
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
  if (transactionsInfo.incomeTransactions) {
    return (
      <>
        <Header />
        <Wrapper>
          <section>
            <div className="container">
              <div className={styles.divReturnCurrent}>
                <ReturnBackButton />
                <CurrentPeriod period={period} setPeriod={setPeriod} />
              </div>

              <ExpensesIncome
                totalIncome={transactionsInfo.totalIncome}
                totalExpenses={transactionsInfo.totalExpense}
              />

              {!isTabOrPc && (
                <ExpensesIncomeSwitch
                  areExpensesOpen={areExpensesOpen}
                  switchExpenses={setAreExpensesOpen}
                />
              )}

              {areExpensesOpen ? (
                <Expenses
                  setOpenCategory={setOpenCategory}
                  openCategory={openCategory}
                  expenseTransactions={transactionsInfo.expenseTransactions}
                >
                  <ExpensesIncomeSwitch
                    areExpensesOpen={areExpensesOpen}
                    switchExpenses={setAreExpensesOpen}
                  />
                </Expenses>
              ) : (
                <Expenses
                  setOpenCategory={setOpenCategory}
                  openCategory={openCategory}
                  expenseTransactions={transactionsInfo.incomeTransactions}
                >
                  <ExpensesIncomeSwitch
                    areExpensesOpen={areExpensesOpen}
                    switchExpenses={setAreExpensesOpen}
                  />
                </Expenses>
              )}
              <Chart
                openCategory={openCategory}
                transactions={
                  areExpensesOpen
                    ? transactionsInfo.expenseTransactions
                    : transactionsInfo.incomeTransactions
                }
              />
            </div>
          </section>
        </Wrapper>
      </>
    );
  }
};

export default ReportsPage;
