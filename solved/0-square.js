const numbersArray = [2, 3, 4];

/**
 * TODO: - Write a function that takes an array of numbers as an argument and prints the square of each element to the console.
 *
 * eg:
 * input => [2, 3, 4]
 * output in console =>
 *  4
 *  9
 *  16
 * */

function square(array) {
    for(let i = 0; i< array.length; i++) {
        console.log(array[i] * array[i])
    }
}

square(numbersArray)


// =====================================================================================


// HOFs are functions which will operate on another function.
numbersArray.forEach(element => console.log(element*element))