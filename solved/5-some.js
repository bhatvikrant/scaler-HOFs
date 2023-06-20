// Some returns true if one or more elements satisfy the given condition.

const transactions = [-4000, -3200, -2000, -1000, 2050];

const result = transactions.some(amt => {
    return amt > 0
})

console.log(result)