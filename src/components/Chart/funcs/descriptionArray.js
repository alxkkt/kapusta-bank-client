const descriptionObject = transactions => {
  const noRepeatDescriptionArray = [];
  for (let seperateTransaction of transactions) {
    if (!noRepeatDescriptionArray.includes(seperateTransaction.description)) {
      noRepeatDescriptionArray.push(seperateTransaction.description);
    }
  }
  const dataObject = {};
  const mappedDescArray = noRepeatDescriptionArray.forEach(elem => {
    const filteredTransactions = transactions.filter(
      ({ description }) => description === elem
    );
    const sum = filteredTransactions.reduce(
      (prevValue, elem) => prevValue + elem.sum,
      0
    );
    dataObject[elem] = sum;
  });
  return dataObject;
};
export default descriptionObject;
