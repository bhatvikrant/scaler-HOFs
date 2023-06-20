// Find returns the first element that satisfies the given condition

const transactions = [4000, -3200, -2000, 1000, 2050];

const result = transactions.find(amt => amt < 0)
console.log(result)