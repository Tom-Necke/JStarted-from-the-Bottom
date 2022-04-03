// Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
// (33, 40, 2, 1, 22)

console.log(33 % 2 == 0 ? "33 is even" : 33 + " " + "is odd");
console.log(40 % 2 == 0 ? "40 is even" : 40 + " " + "is odd");
console.log(2 % 2 == 0 ? "2 is even" : 2 + " " + "is odd");
console.log(1 % 2 == 0 ? "1 is even" : 1 + " " + "is odd");
console.log(22 % 2 == 0 ? "22 is even" : 22 + " " + "is odd");

let altOpt = 44; 

console.log(altOpt % 2 == 0 ? `${altOpt} is even` : `${altOpt} is odd`);

// Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

let isDog = true;

console.log(isDog == true ? `pat, pat` : `find me a dog to pat!`);

// Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

let speedCheck = 30;

console.log(speedCheck > 50 ? `you're going too fast!` : `You're driving below the speed limit, Oma`);

// Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

let isStudent = true;

console.log(isStudent == true ? "ticket costs €5,00" : "Ticket costs €12,00");

// Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

let age = 27;

console.log(age < 16 ? "serve butter beer" : "serve beer");

// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let numOne = 30;
let numTwo = 70;

if (numOne >= 50 && numOne <= 99 && numTwo >= 50 && numTwo <= 99) {
    console.log(true);
} else {
    console.log(false);
}

// Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

let pyStr = "Pyramide";

if (pyStr.startsWith("Py")) {
    console.log(pyStr);
} else {
    console.log(false);
}

// Calculate the sum of the two given integers. If the two values are same, then return triple their sum. 

if (numOne == numTwo) {
    console.log(numOne * 3);
} else {
    console.log(numOne + numTwo);
}

// isBigger, check if a given number bigger then 55, write that in function
// check the following 70, 4, 200, 51, 2.2

function isBigger(num) {
    console.log(num > 55 ? `${num} is bigger than 55` : `${num} is not bigger than 55`);
}

isBigger(70);
isBigger(4);
isBigger(200);
isBigger(51);
isBigger(2.2);

// BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to or more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".

let firstName = "Tom";
let myAge = 27;

if (myAge < 13) {
    console.log(`${firstName} is a child`);
} else if (myAge >= 13 && myAge < 20) {
    console.log(`${firstName} is a teenager`);
} else if (myAge >= 20 && myAge < 30) {
    console.log(`${firstName} is a young adult`);
} else {
    console.log(`${firstName} is a adult`);
}