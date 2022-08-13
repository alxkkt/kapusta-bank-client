import { Link } from 'react-router-dom';
import sprite from '../../images/icons.svg';
import styles from './ReturnBackButton.module.scss';
import { useState } from 'react';

const ReturnBackButton = () => {
  const [tabletScreenSize] = useState(
    window.matchMedia('screen and (min-width: 768px)').matches
  );

  return (
    <Link className={styles.link} to="/">
      <svg className={styles.svg} width="32" height="23">
        <use href={`${sprite}#icon-backspace`}></use>
      </svg>
      {tabletScreenSize ? (
        <p className={styles.MainPage}>Main page</p>
      ) : undefined}
    </Link>
  );
};

export default ReturnBackButton;
