// .map will loop over every element of the array and will perform specific operations provided by you. It always returns the result in a new array.

const numbersArray = [2, 3, 4];

const result = numbersArray.map(num => num * num)
console.log(result)


// =====================================================================================


const transactions = [4000, -3200, -2000, 1000, 2050];
// TODO: Write a function to convert these transactions in INR to USD

const inrToDollarConversionRate = 90;

const transactionsInDollars = transactions.map((amt) => {
  return (amt / inrToDollarConversionRate).toFixed(2);
});

console.log(transactionsInDollars);
