import sprite from '../../../images/icons.svg';
import styles from '../Expenses.module.scss';
import { nanoid } from '@reduxjs/toolkit';
const expensesMarkup = expenseCategories =>
  expenseCategories.map(({ category, sum }) => {
    switch (category) {
      case 'transport':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg} height="56" width="65">
              <use href={`${sprite}#icon-transport`}></use>
            </svg>
            <p className={styles.category}>TRANSPORT</p>
          </li>
        );

      case 'health':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg} height="56" width="65">
              <use href={`${sprite}#icon-health`}></use>
            </svg>
            <p className={styles.category}>HEALTH</p>
          </li>
        );
      case 'alcohol':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg} height="56" width="65">
              <use href={`${sprite}#icon-alcohol`}></use>
            </svg>
            <p className={styles.category}>ALCOHOL</p>
          </li>
        );
      case 'entertainment':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg} height="56" width="65">
              <use href={`${sprite}#icon-entertainment`}></use>
            </svg>
            <p className={styles.category}>ENTERTAINMENT</p>
          </li>
        );
      case 'housing':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg} height="56" width="65">
              <use href={`${sprite}#icon-housing`}></use>
            </svg>
            <p className={styles.category}>HOUSING</p>
          </li>
        );
      case 'technique':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg} height="56" width="65">
              <use href={`${sprite}#icon-technique`}></use>
            </svg>
            <p className={styles.category}>TECHNIQUE</p>
          </li>
        );
      case 'communal, communications':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg} height="56" width="65">
              <use href={`${sprite}#icon-communal`}></use>
            </svg>
            <p className={styles.category}>
              COMMUNAL <br />
              COMMUNICATIONS
            </p>
          </li>
        );
      case 'sports, hobbies':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg} height="56" width="65">
              <use href={`${sprite}#icon-sports`}></use>
            </svg>
            <p className={styles.category}>
              SPORTS&#44 <br />
              HOBBIES
            </p>
          </li>
        );
      case 'education':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg} height="56" width="65">
              <use href={`${sprite}#icon-education`}></use>
            </svg>
            <p className={styles.category}>EDUCATION</p>
          </li>
        );
      case 'other':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg} height="56" width="65">
              <use href={`${sprite}#icon-education`}></use>
            </svg>
            <p className={styles.category}>EDUCATION</p>
          </li>
        );

      case 'wages':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg} height="56" width="65">
              <use href={`${sprite}#icon-wages`}></use>
            </svg>
            <p className={styles.category}>ЗП</p>
          </li>
        );
      case 'income':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg} height="56" width="65">
              <use href={`${sprite}#icon-income`}></use>
            </svg>
            <p className={styles.category}>доп.дохід</p>
          </li>
        );

      default:
        return <></>;
    }
  });

export default expensesMarkup;
