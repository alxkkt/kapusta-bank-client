// import styles from './ModalBalance.module.scss';

import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const ModalBalance = ({ children, className }) => {
  return createPortal(<div className={className}>{children}</div>, modalRoot);
};

export default ModalBalance;
