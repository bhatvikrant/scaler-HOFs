// Filter also returns a new array and it will return all the elements that match the condition you have provided. If the condition is true it will return the element, but if the condition if false it will discard the element.

const numbers = [1, 2, 3, 4, 5, 6];
// TODO: write a function to return only even numbers

const evenArray = numbers.filter((num) => {
  return num % 2 == 0;
});

console.log(evenArray);


// =====================================================================================


const transactions = [4000, -3200, -2000, 1000, 2050];
// TODO: Write a function to return all the positive values

const positiveTransactions = transactions.filter((amt) => {
  return amt > 0;
});

console.log(positiveTransactions);
