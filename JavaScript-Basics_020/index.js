// // Write a function that converts hours into seconds.
// // Examples
// // howManySeconds(2) ➞ 7200
// // howManySeconds(10) ➞ 36000
// // howManySeconds(24) ➞ 86400

const howManySeconds = (hour) => hour * 3600;
console.log(howManySeconds(2));
console.log(howManySeconds(10));
console.log(howManySeconds(24));

// Write a function that returns the string "something" joined with a space " " and the given argument a.
// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// giveMeSomething("something") ➞ "something something"

const giveMeSomething = (str) => `something ${str}`;

console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("something"));

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117
// lessThan100(3, 77) ➞ true

// const lessThan100 = (val1, val2) => val1 + val2 < 100;

function lessThan100(num1, num2) {
  return num1 + num2 < 100;
}

console.log(lessThan100(22, 15));
console.log(lessThan100(3, 77));
console.log(lessThan100(83, 34));

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// Examples
// addition(0) ➞ 1
// addition(9) ➞ 10
// addition(-3) ➞ -2

const addition = (num) => num + 1;

console.log(addition(0));
console.log(addition(-3));

// Create a function that takes the age in years and returns the age in days.
// Examples
// calcAge(65) ➞ 23725
// calcAge(0) ➞ 0
// calcAge(32) ➞

const calcAge = (age) => age * 365.25;
console.log(calcAge(32));