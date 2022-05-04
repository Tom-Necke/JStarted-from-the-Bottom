// Strings, Numbers, Booleans, Null, undefined data types & typeof operator
// Exercises to become familiar with data types and typeof operator.

// Copy and paste these variables into your JavaScript file. In the commented section, write down which type you think each variable is. Check your answers by printing the types to the console.
// let length = 16.78; // let lastName = "Johnson"; // let car = ""; // let isOpen = true; //

let length = 16.78; // number
let lastName = "Johnson"; // string
let car = "" // string
let isOpen = true; // boolean
console.log(typeof length);
console.log(typeof lastName);
console.log(typeof car);
console.log(typeof isOpen);

// Declare two variables called ageMark and ageJohn. Assign their ages - one age should be assigned as a string, the other as a number. Print the variables' data types to the console.

let ageMark = 27;
let ageJohn = "23";
console.log(typeof ageMark);
console.log(typeof ageJohn);

// Is John older than Mark? Declare a variable with a boolean value and print the following to the console eg. "John is older than Mark: true"

let johnOlderMark = ageJohn > ageMark 
console.log(`John is older than Mark: ${johnOlderMark}`);

// Declare a variable called "str". Do not assign a value. Print str's data type to the console.

let str
console.log(typeof str);

// Assign a string to str. Print str's data type again.

str = "hello"
console.log(typeof str);

// Print the last character of str's string to the console.

console.log(str[4]);

// Print the length of str to the console, as well as the data type of str's length.

console.log(str.length + " " + typeof str.length);

// Declare three variables: "goals", "penalties", "injuries". Assign numbers to each of the variables. Check if the variable values are equal or not (e.g. console.log(goals == penalties);). Do this for each possibility (goals, penalties) (goals, injuries), (penalties, injuries). Then, print the data type of this check to the console.

let goals = 7;
let penalties = 1;
let injuries = 2;
console.log(goals == penalties);
console.log(goals == injuries);
console.log(penalties == injuries);
console.log(typeof (goals == penalties));
console.log(typeof (goals == injuries));
console.log(typeof (penalties == injuries));

// What is the type of Infinity? Comment your answer. Print the type of infinity to the console.

// number

console.log(typeof Infinity);

// Declare a variable. Assign the variable the value of a number or a string. Use the isNaN() method to check whether the variable is a number or not. Print "variable is NOT a number: true/false".

let newVar = 27

console.log(`variable is NOT a number: ${isNaN(newVar)}`);

// Print the data type of isNaN(variable) to the console.

console.log(typeof isNaN(newVar));