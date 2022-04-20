// Create a function that returns an array of the properties of a javascript object.
//   Example

const person = {
    name: "Mike",
    class: "4A",
    course: "English",
};
const displayPerson = () => {
    return console.log(Object.keys(person));
}
displayPerson()
// Expected output:
//   ["name", "class", "course"]

// Given the following object
const student = {
  firstName: "Zain",
  lastName: "Oil",
  class: "D05",
};
// Create a method that prints the following: "Zain Oil a student in class D05"

const functionZain = () => {
    return console.log(`${student.firstName} ${student.lastName} a student in class ${student.class}`);
}
functionZain()

// Get Values. Create a function that returns an array of all values of an object’s properties.
//   Examples:
const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
    choice3: "milk",
    display: function () {
        return console.log([this.choice1, this.choice2, this.choice3]);
    }
};
getObjectValues.display()

// Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.
// Examples:
// (4, { min: 0, max: 5 }) ➞ true
// (4, { min: 4, max: 5 }) ➞ true
// (4, { min: 6, max: 10 }) ➞ false
// (5, { min: 5, max: 5 }) ➞ true

const inRange = (num, obj) => {
    let result = 0;
    if (num >= obj.min && num <= obj.max) {
        result = true
    } else {
        result = false
    }


    return console.log(result);
}

inRange(4, { min: 0, max: 5 });
inRange(4, { min: 4, max: 5 });
inRange(4, { min: 6, max: 10 });
inRange(5, { min: 5, max: 5 });