const transactions = [4000, -3200, -2000, 1000, 2050];
// TODO: From transactions array find the sum of all positive values.

const sumOfPositiveValues = transactions
  .filter((amt) => amt > 0)
  .reduce((acc, val) => {
    return acc + val;
  }, 0);

console.log(sumOfPositiveValues);
