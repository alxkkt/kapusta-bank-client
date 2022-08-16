import styles from '../Expenses.module.scss';

const phoneMarkupCallback = categoriesMarkup => {
  const arrayBase = [];
  const howManyArrays = Math.ceil(categoriesMarkup.length / 3);
  for (let i = 0; i < howManyArrays; i += 1) {
    arrayBase.push([]);
  }
  categoriesMarkup.forEach((element, index) => {
    const arrayPosition = Math.floor(index / 3);
    arrayBase[arrayPosition].push(element);
  });

  const markup = arrayBase.map(element => (
    <ul className={styles.ul}>{element}</ul>
  ));
  return markup;
};

export default phoneMarkupCallback;
