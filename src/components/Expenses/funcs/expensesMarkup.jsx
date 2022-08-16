import sprite from '../../../images/icons.svg';
import styles from '../Expenses.module.scss';
const expensesMarkup = expenseCategories =>
  expenseCategories.map(({ category, sum }) => {
    switch (category) {
      case 'transport':
        return (
          <li className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg} height="56" width="65">
              <use href={`${sprite}#icon-transport`}></use>
            </svg>
            <p className={styles.category}>TRANSPORT</p>
          </li>
        );

      case 'health':
        return (
          <li className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg}  height="56" width="65">
              <use href={`${sprite}#icon-health`}></use>
            </svg>
            <p className={styles.category}>HEALTH</p>
          </li>
        );
      case 'alcohol':
        return (
          <li className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg}  height="56" width="65">
              <use href={`${sprite}#icon-alcohol`}></use>
            </svg>
            <p className={styles.category}>ALCOHOL</p>
          </li>
        );
      case 'entertainment':
        return (
          <li className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg}  height="56" width="65">
              <use href={`${sprite}#icon-entertainment`}></use>
            </svg>
            <p className={styles.category}>ENTERTAINMENT</p>
          </li>
        );
      case 'housing':
        return (
          <li className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg}  height="56" width="65">
              <use href={`${sprite}#icon-housing`}></use>
            </svg>
            <p className={styles.category}>HOUSING</p>
          </li>
        );
      case 'technique':
        return (
          <li className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg}  height="56" width="65">
              <use href={`${sprite}#icon-technique`}></use>
            </svg>
            <p className={styles.category}>TECHNIQUE</p>
          </li>
        );
      case 'communal, communications':
        return (
          <li className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg}  height="56" width="65">
              <use href={`${sprite}#icon-communal`}></use>
            </svg>
            <p className={styles.category}>
              COMMUNAL&#44 <br />
              COMMUNICATIONS
            </p>
          </li>
        );
      case 'sports, hobbies':
        return (
          <li className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg}  height="56" width="65">
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
          <li className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg}  height="56" width="65">
              <use href={`${sprite}#icon-education`}></use>
            </svg>
            <p className={styles.category}>EDUCATION</p>
          </li>
        );
      case 'other':
        return (
          <li className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <svg className={styles.svg}  height="56" width="65">
              <use href={`${sprite}#icon-education`}></use>
            </svg>
            <p className={styles.category}>EDUCATION</p>
          </li>
        );
      default:
        return;
    }
  });

export default expensesMarkup;
