import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import styles from './ModalBalance.module.scss';

const ModalBalance = ({ balance }) => {
  const [tooltipStatus, setTooltipStatus] = useState({
    isOpen: false,
    isShown: false,
  });

  const closeTooltip = () => {
    return setTooltipStatus({ isOpen: false, isShown: true });
  };

  useEffect(() => {
    if (!balance && !tooltipStatus.isShown) {
      setTooltipStatus(prevState => ({ ...prevState, isOpen: true }));
    }

    window.addEventListener('click', closeTooltip);

    return () => {
      window.removeEventListener('click', closeTooltip);
    };
  }, [balance, tooltipStatus.isShown]);

  const isTooltipOpen = isOpen => {
    return isOpen
      ? `${styles.tooltipContainer} ${styles.visible}`
      : `${styles.tooltipContainer}`;
  };
  return (
    <div
      className={isTooltipOpen(tooltipStatus.isOpen)}
      onClick={() => closeTooltip()}
    >
      <div className={styles.triangle}></div>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <p className={styles.strongSign}>
            Hello! To get started, enter the current balance of your account!
          </p>
          <p className={styles.smallSign}>
            You can't spend money until you have it :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalBalance;

// ModalBalance.propTypes = {
//   balance: PropTypes.number.isRequired,
// };
