import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';

import Header from '../Header';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';
import Wrapper from 'shared/components/Wrapper';
import Calendar from 'components/Calendar';
import Icon from 'shared/components/Icon';

import styles from './AddTransactionModal.module.scss';

const modal = document.getElementById('modal');

const AddTransactionModal = ({ closeModal, transactionType, sendData }) => {
  const [date, setDate] = useState(Date.now);

  const handleChange = date => {
    setDate(date);
  };

  return createPortal(
    <div className={styles.overlay}>
      <Header />
      <Wrapper>
        <section className={styles.section}>
          <div className="container">
            <Link className={styles.link} to="/" onClick={() => closeModal()}>
              <Icon
                className={styles.img}
                width={24}
                height={24}
                name={`icon-backspace`}
              />
            </Link>
            <div className={styles.calendar}>
              <Calendar startDate={date} onChange={handleChange} />
            </div>
            <AddTransactionForm
              transactionType={transactionType}
              sendData={sendData}
              closeModal={closeModal}
            />
          </div>
        </section>
      </Wrapper>
    </div>,
    modal
  );
};

export default AddTransactionModal;
