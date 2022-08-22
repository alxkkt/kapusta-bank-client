import { SpinnerCircular } from 'spinners-react';
import PropTypes from 'prop-types';

import styles from './Loader.module.scss';

const Loader = ({ isEnabled }) => {
  return (
    <div className={styles.Loader}>
      <SpinnerCircular
        enabled={isEnabled}
        size={90}
        thickness={110}
        speed={150}
        color="#ff6b09"
        secondaryColor="#00122f"
      />
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
};
