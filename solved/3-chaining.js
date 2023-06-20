const data = [
  { name: "Josh", age: 19, gender: "M" },
  { name: "Ava", age: 50, gender: "F" },
  { name: "Anu", age: 40, gender: "F" },
  { name: "Jon", age: 45, gender: "M" },
  { name: "Ram", age: 32, gender: "M" },
  { name: "Arti", age: 29, gender: "F" },
  { name: "Jacob", age: 22, gender: "M" },
  { name: "Millie", age: 35, gender: "F" },
];

// TODO: Write a function that returns the ages of all Males from the given array

const result = data
  .filter((value) => value.gender === "M")
  .map((value) => value.age);
  
console.log(result);
