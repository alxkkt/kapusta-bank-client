import PropTypes from 'prop-types';

import styles from './ModalBalance.module.scss';

const ModalBalance = ({ isOpen }) => {
  const isTooltipOpen = isOpen => {
    return isOpen
      ? `${styles.tooltipContainer} ${styles.visible}`
      : `${styles.tooltipContainer}`;
  };
  return (
    <div className={isTooltipOpen(isOpen)}>
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

ModalBalance.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
