import sprite from '../../../images/icons.svg';
import styles from '../Expenses.module.scss';
import { nanoid } from '@reduxjs/toolkit';
const expensesMarkup = (
  expenseCategories,
  clickOnCategoryButton,
  openCategory
) =>
  expenseCategories.map(({ category, sum }) => {
    switch (category) {
      case 'transport':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <button
              className={styles.button}
              onClick={() => clickOnCategoryButton('transport')}
            >
              <svg
                className={
                  openCategory === 'transport' ? styles.svgActive : styles.svg
                }
                height="56"
                width="65"
              >
                <use href={`${sprite}#icon-transport`}></use>
              </svg>
            </button>
            <p className={styles.category}>TRANSPORT</p>
          </li>
        );
      case 'products':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <button
              className={styles.button}
              onClick={() => clickOnCategoryButton('products')}
            >
              <svg
                className={
                  openCategory === 'transport' ? styles.svgActive : styles.svg
                }
                height="56"
                width="65"
              >
                <use href={`${sprite}#icon-products`}></use>
              </svg>
            </button>
            <p className={styles.category}>PRODUCTS</p>
          </li>
        );
      case 'health':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <button
              className={styles.button}
              onClick={() => clickOnCategoryButton('health')}
            >
              <svg
                className={
                  openCategory === 'health' ? styles.svgActive : styles.svg
                }
                height="56"
                width="65"
              >
                <use href={`${sprite}#icon-health`}></use>
              </svg>
            </button>
            <p className={styles.category}>HEALTH</p>
          </li>
        );
      case 'alcohol':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <button
              className={styles.button}
              onClick={() => clickOnCategoryButton('alcohol')}
            >
              <svg
                className={
                  openCategory === 'alcohol' ? styles.svgActive : styles.svg
                }
                height="56"
                width="65"
              >
                <use href={`${sprite}#icon-alcohol`}></use>
              </svg>
            </button>
            <p className={styles.category}>ALCOHOL</p>
          </li>
        );
      case 'entertainment':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <button
              className={styles.button}
              onClick={() => clickOnCategoryButton('entertainment')}
            >
              <svg
                className={
                  openCategory === 'entertainment'
                    ? styles.svgActive
                    : styles.svg
                }
                height="56"
                width="65"
              >
                <use href={`${sprite}#icon-entertainment`}></use>
              </svg>
            </button>
            <p className={styles.category}>ENTERTAINMENT</p>
          </li>
        );
      case 'housing':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <button
              className={styles.button}
              onClick={() => clickOnCategoryButton('housing')}
            >
              <svg
                className={
                  openCategory === 'housing' ? styles.svgActive : styles.svg
                }
                height="56"
                width="65"
              >
                <use href={`${sprite}#icon-housing`}></use>
              </svg>
            </button>
            <p className={styles.category}>HOUSING</p>
          </li>
        );
      case 'technique':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <button
              className={styles.button}
              onClick={() => clickOnCategoryButton('technique')}
            >
              <svg
                className={
                  openCategory === 'technique' ? styles.svgActive : styles.svg
                }
                height="56"
                width="65"
              >
                <use href={`${sprite}#icon-technique`}></use>
              </svg>
            </button>
            <p className={styles.category}>TECHNIQUE</p>
          </li>
        );
      case 'communal, communications':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <button
              className={styles.button}
              onClick={() => clickOnCategoryButton('communal, communications')}
            >
              <svg
                className={
                  openCategory === 'communal, communications'
                    ? styles.svgActive
                    : styles.svg
                }
                height="56"
                width="65"
              >
                <use href={`${sprite}#icon-communal`}></use>
              </svg>
            </button>
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
            <button
              className={styles.button}
              onClick={() => clickOnCategoryButton('sports, hobbies')}
            >
              <svg
                className={
                  openCategory === 'sports, hobbies'
                    ? styles.svgActive
                    : styles.svg
                }
                height="56"
                width="65"
              >
                <use href={`${sprite}#icon-sports`}></use>
              </svg>
            </button>
            <p className={styles.category}>
              SPORTS,
              <br />
              HOBBIES
            </p>
          </li>
        );
      case 'education':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <button
              className={styles.button}
              onClick={() => clickOnCategoryButton('education')}
            >
              <svg
                className={
                  openCategory === 'education' ? styles.svgActive : styles.svg
                }
                height="56"
                width="65"
              >
                <use href={`${sprite}#icon-education`}></use>
              </svg>
            </button>
            <p className={styles.category}>EDUCATION</p>
          </li>
        );
      case 'other':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <button
              className={styles.button}
              onClick={() => clickOnCategoryButton('other')}
            >
              <svg
                className={
                  openCategory === 'other' ? styles.svgActive : styles.svg
                }
                height="56"
                width="65"
              >
                <use href={`${sprite}#icon-other`}></use>
              </svg>
            </button>
            <p className={styles.category}>OTHER</p>
          </li>
        );

      case 'wages':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <button
              className={styles.button}
              onClick={() => clickOnCategoryButton('wages')}
            >
              <svg
                className={
                  openCategory === 'wages' ? styles.svgActive : styles.svg
                }
                height="56"
                width="65"
              >
                <use href={`${sprite}#icon-wages`}></use>
              </svg>
            </button>
            <p className={styles.category}>ЗП</p>
          </li>
        );
      case 'income':
        return (
          <li key={nanoid()} className={styles.categoryDiv}>
            <p className={styles.sum}>{sum}</p>
            <button
              className={styles.button}
              onClick={() => clickOnCategoryButton('income')}
            >
              <svg
                className={
                  openCategory === 'income' ? styles.svgActive : styles.svg
                }
                height="56"
                width="65"
              >
                <use href={`${sprite}#icon-income`}></use>
              </svg>
            </button>
            <p className={styles.category}>доп.дохід</p>
          </li>
        );

      default:
        return <></>;
    }
  });

export default expensesMarkup;
