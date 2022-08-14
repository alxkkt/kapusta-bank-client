const categoriesObject = expenseTransactions => {
  const expenseTransactionsCategoriesArray = expenseTransactions.map(
    ({ category }) => category
  );
  const categoriesArray = [];
  for (let category of expenseTransactionsCategoriesArray) {
    if (!categoriesArray.includes(category)) categoriesArray.push(category);
    continue;
  }
  const categoryObjArray = categoriesArray.map(elem => {
    const elemArrayFiltered = expenseTransactions.filter(
      ({ category }) => category === elem
    );
    const sum = elemArrayFiltered.reduce(
      (prevValue, { sum }) => prevValue + sum,
      0
    );
    return {
      category: elem,
      sum,
    };
  });
  return categoryObjArray;
};
export default categoriesObject;
