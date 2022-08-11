// import styles from './ReportsPage.module.scss';
import CurrentPeriod from '../../components/CurrentPeriod';
import moment from 'moment';
import { useState } from 'react';

const ReportsPage = () => {
  const [period, setPeriod] = useState(moment().month());

  return (
    <div>
      <CurrentPeriod period={period} setPeriod={setPeriod} />
    </div>
  );
};

export default ReportsPage;
