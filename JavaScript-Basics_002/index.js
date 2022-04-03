// Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.

let firstVar = "I can walk in the park all day!";

console.log(firstVar.substring(18, 22));

// Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console.

let secondVar = "Hello World";

secondVar = secondVar.toUpperCase();

console.log(secondVar);

// Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.

let thirdVar = "Earthlings";

thirdVar = thirdVar.toLowerCase();

console.log(thirdVar);

// Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.

let fourthVar = "JavaScipt";

console.log(fourthVar.substring(3, 6));

// Check if the sentence “nice shoes” contains the letter l.

console.log("nice shoes".includes("l"));

// Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ.

console.log(fourthVar[0] + fourthVar + fourthVar[0]);

// Create a new string from a given string, taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.

console.log(`${fourthVar.substring(6, 9)}${fourthVar}${fourthVar.substring(6, 9)}`);

// Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".

let firstName = "Tom";
let job = "Web Developer";
let city = "Berlin";

console.log(`My name is ${firstName}. I live in ${city} and i am a ${job}.`);

// Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

let fox = "the quick brown fox";

fox = fox[0].toUpperCase() + fox.substring(1);

console.log(fox);

// Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB

let boogie = "BoogieWoogie";

let woogie = boogie[11] + boogie.substring(1, 11) + boogie[0];

console.log(woogie);

