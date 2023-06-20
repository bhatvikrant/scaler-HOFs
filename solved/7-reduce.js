// Reduce all the elements in an array to a single value according to the provided operation.

const array = [1, 2, 3, 4]; // Total 10


const sum = array.reduce((acc, value) => {
    const updatedSum = acc + value;

    return updatedSum
}, 0)

console.log(sum)


// =====================================================================================


const multiply = array.reduce((acc, value) => {
    const updateProduct = acc * value;

    return updateProduct
}, 1)

console.log(multiply)