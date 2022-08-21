import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useMediaQuery } from 'react-responsive';

import CurrentPeriod from '../../components/CurrentPeriod';
import ExpensesIncomeSwitch from '../../components/ExpensesIncomeSwitch';
import ExpensesIncome from '../../components/ExpensesIncome';
import ReturnBackButton from '../../components/ReturnBackButton';
import Header from '../../components/Header';
import Expenses from '../../components/Expenses';
import Chart from '../../components/Chart';
import Wrapper from 'shared/components/Wrapper';

import { getTransactionsByDate } from '../../redux/transactionsByDate/operations';
import { transactions } from '../../redux/transactionsByDate/selectors';

import styles from './ReportsPage.module.scss';

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
