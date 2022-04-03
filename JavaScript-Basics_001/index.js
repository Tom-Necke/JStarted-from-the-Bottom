// These exercises are aimed at making you familiar with using node to run your scripts & the console.log method. For each exercise, run your script in node to check if your console.log() are working. Remember to use camelCase where needed.

// Make your own JavaScript file and work from there. Open up your terminal in VS Code.

// Console log a line of text eg. "this is an exercise in console logging" (do not forget quotation marks).

console.log("this is an exercise in console logging");

// Declare a variable and give your variable the following value: "This is the value.". Console log your variable.

let newVar = "This is the value.";

console.log(newVar);

// Declare a variable called firstName and assign your first name to that variable. Do the same with your last name. Console log both variables. NOTE: When console logging two variables, separate the variables with a comma (,) in the console log e.g. console.log(variable1, variable2);

let firstName = "Tom";
let lastName = "Necke";

console.log(firstName, lastName);

// Make a profile of someone's information. Store all the information in variables eg. name, city, job etc. (five variables total) Console log the variables.

let userFirstName = "Tom";
let userLastName = "Necke";
let userAge = "27";
let userCity = "Berlin";
let userJob = "Web Developer"

console.log(userFirstName, userLastName, userAge, userCity, userJob);

// Print a sentence using the profile variables above, adding text where necessary for sentence flow, i.e., "John Smith is a 43 year old teacher who lives in Berlin". you can combine variables with text in the console by using the plus symbol (+) e.g. console.log("this is a " + variable);

console.log(userFirstName + " " + userLastName + " " + "is an" + " " + userAge + " " +"year old" + " " + userJob + " " + "who lives in" + " " + userCity + ".");

// Declare a variable and assign a string as its value. Make sure the string is at least 6 characters long. Print the variable to the console.

let newStr = "Chocolate";

console.log(newStr);

// Access the 2nd and 6th elements of the string using index notation. Print the elements to the console.

console.log(newStr[1], newStr[5]);

// Declare a variable called name and assign a string as its value.

let name = "Tom";

// Declare a variable called age and assign a number as its value.

let age = 27;

// Declare a variable called year and assign a number as its value.

let year = 2022;

// Using your declared variables, print a string to the console. For example, "Basem is 37 in 2020".

console.log(`${name} is ${age} in ${year}`);

// Declare a variable called isMarried and assign it a boolean value.

let isMarried = false;

// Print a string to the console, indicating whether or not your person is married. For example, "Basem is married: true"

console.log(`${name} is married: ${isMarried}`);