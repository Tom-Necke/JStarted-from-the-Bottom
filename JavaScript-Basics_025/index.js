// 1. Get total orders
// Return the total amount of orders.

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];

const totalAmount = orders.reduce((acc, cur) => acc + cur.amount, 0);

console.log(totalAmount);

// 2. Increment by 1
// Create a function that increments each element in the arrayOfNumbers by 1. Return the a new array of modified elements.

const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 

const incrementByOne = (arr) => {
    let newArr = []
    for (ele of arr) {
        newArr.push(ele + 1)
    }
    return newArr
}

console.log(incrementByOne(arrayOfNumbers));

// 3. Filter Evens
// Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.
// Examples:
// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]

const filterEvens = (arr) => arr.filter((x) => x % 2 == 0);

console.log(filterEvens([1, 2, 3, 11, 12, 13]));
console.log(filterEvens([22, 2, 31, 110, 6, 13]));

// 4. Filter Friends
// Given an array, create a function which filters array based on a search query.
// Examples
// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, 'ka')); // ["Rika"];
// console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterItems = (arr, str) => arr.filter((x) => x.includes(str));

console.log(filterItems(friends, 'ka'));
console.log(filterItems(friends, 'e'));

// 5. Sum Up
// Write a function called sum that uses the reduce method to sum up an array of numbers.
// Examples:
// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20

const sum = (arr) => arr.reduce((acc, cur) => acc + cur);

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([6, 7, 7]));