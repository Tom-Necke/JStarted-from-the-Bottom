// Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
// Example:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}

const countLetters = (str) => {
    let result = {};
    for (let i = 0; i < str.length; i++) {
      result[str[i]] = result[str[i]] + 1 || 1;
    }
    return console.log(result);
};
  
countLetters("tree");
countLetters("Hallo");


const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    display: function () {
        if (this.isChallenging == true && this.isRewarding == true) {
            console.log(`${this.languages} is rewarding and challenging.`);
        }
    }
};

// Write the command to add the language "Go" to the end of the languages array.

programming.languages.push("Go");
  
// Using a loop, console.log all of the values in the programming object.

for (const value in programming) {
    console.log(programming[value]);
}

// Write a command to add a new key called isFun and a value of true to the programming object.

programming.isFun = true;

// Using a loop, iterate through the languages array and console.log all of the languages.

for (const lang in programming.languages) {
    console.log(programming.languages[lang]);
}

// Using a loop, console.log all of the keys in the programming object.

for (const key in programming) {
    console.log(key);
}

// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.

programming.display();

// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.

// [Function: display]  

// Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.
// Examples:
// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false

function freeShipping(object) {
    let result = 0;
    let sum = Object.values(object);
    for (i = 0; i < sum.length; i++) {
      result += sum[i];
    }
    if (Math.round(result) >= 50) {
      return console.log(true);
    } else {
      return console.log(false);;
    }
  }

freeShipping({ "Sponge": 3.50, "Soap": 5.99 })
freeShipping({ "Surround Sound Equipment": 499.99 })
freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 })


// 1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.

const person = {
    firstName: "Tom",
    lastName: "Necke",
    age: 27,
}

function displayPerson() {
    for (const key in person) {
        console.log(key + " " + person[key]);
    }
}

displayPerson();

// 2. Get Values. Create a function that returns an array of all values of an object's properties.

const getObjectValues = (obj) => {
    console.log(Object.values(obj))
}


getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
})
  
// 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
 //Example of Expected Output "Michael Smith is a 20 year old driver in Paris".

let person1 = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: "Paris",
    display: function () {
        return console.log(`${this.firstName} ${this.lastName} id s ${this.age} year old ${this.job} in ${this.city}`);
    }
  }

person1.display();

// 1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
// [["A", 1], ["B", 2], ["C", 3]]

const objectToArray = (obj) => {
    console.log(Object.entries(obj));
}

objectToArray({
    A: 1,
    B: 2,
    C: 3
}) 
  

// List Properties. Create a function that returns an array of properties of a javascript object.
// ["name", "class", "course"]
let student = {
    name: "Mike", 
    class: "4A",
    course: "English"
}

const studentDisplay = (bla) => {
    return console.log(Object.keys(bla));
}

studentDisplay(student)





// const storeItems = {
// 	"Wool": 13.99,
// 	"Knitting Needles": 15.50,
// 	"Bag": 13.99,
// }
// const freeShipping = obj => {
// 	const valuesArray = Object.values(obj);
// 	let sum = valuesArray.reduce((acc, curr) => acc + curr, 0);
	
// 	// OR a loop:
// 	// let sum = 0;
// 	// for (let i = 0; i < valuesArray.length; i++) {
// 	// 	sum += valuesArray[i];
// 	// }
	
// 	return sum > 50 ? "Free shipping" : "Shipping costs apply";
// }

// console.log(freeShipping(storeItems)); // "Shipping costs apply"




const freeShipping2 = (obj) => {
    const newArr = Object.values(obj);
    let sum = newArr.reduce((acc, curr) => acc + curr);
    return console.log(sum > 50 == true || false);
}


freeShipping2({ "Sponge": 3.50, "Soap": 5.99 })
freeShipping2({ "Surround Sound Equipment": 499.99 })
freeShipping2({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 })


// MakePairs - Write a method that returns a deep array like [[key, value]]
// Task description: Write a method that returns a deep array like [[key, value]]
// Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

const makePairs = (obj) => {
    console.log(Object.entries(obj));
}

makePairs({ a: 1, b: 2 })