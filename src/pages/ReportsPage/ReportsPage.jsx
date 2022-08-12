// import styles from './ReportsPage.module.scss';
import CurrentPeriod from '../../components/CurrentPeriod';
import ExpensesIncomeSwitch from '../../components/ExpensesIncomeSwitch';
import ExpensesIncome from '../../components/ExpensesIncome';
import moment from 'moment';
import { useState } from 'react';

const ReportsPage = () => {
  const [period, setPeriod] = useState(moment().month());
  const [areExpensesOpen, setAreExpensesOpen] = useState(true);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  return (
    <section>
      <div className="container">
        <CurrentPeriod period={period} setPeriod={setPeriod} />
        <ExpensesIncome
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
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
