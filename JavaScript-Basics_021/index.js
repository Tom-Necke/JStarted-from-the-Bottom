// // Write a function that converts hours into seconds.
// // Examples
// // howManySeconds(2) ➞ 7200
// // howManySeconds(10) ➞ 36000
// // howManySeconds(24) ➞ 86400

const howManySeconds = (sec) => console.log(sec * 3600);

howManySeconds(2);
howManySeconds(10);
howManySeconds(24);

// Write a function that returns the string "something" joined with a space " " and the given argument a.
// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// giveMeSomething("something") ➞ "something something"

const giveMeSomething = (str) => console.log(`something ${str}`);

giveMeSomething("is better than nothing");
giveMeSomething("Bob Jane");
giveMeSomething("something");

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117
// lessThan100(3, 77) ➞ true

const lessThan100 = (num1, num2) => console.log(num1 + num2 < 100);

lessThan100(22, 15);
lessThan100(83, 34);
lessThan100(3, 77);

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// Examples
// addition(0) ➞ 1
// addition(9) ➞ 10
// addition(-3) ➞ -2

const addition = (num) => console.log(num + 1);

addition(0);
addition(9);
addition(-3);

// Create a function that takes the age in years and returns the age in days.
// Examples
// calcAge(65) ➞ 23725
// calcAge(0) ➞ 0
// calcAge(20) ➞ 7300

const calcAge = (num) => console.log(num * 365);

calcAge(65);
calcAge(0);
calcAge(20);