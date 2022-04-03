// No Duplicates! A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

const noDuplicates = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i])
        }
    }
    return console.log(result);
}

noDuplicates([1, 4, 4, 7, 7, 7]);
noDuplicates([1, 6, 6, 9, 9]);
noDuplicates([2, 2, 2, 2, 2, 2]);
noDuplicates([5, 10, 15, 20, 25]);


// . snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
// toCamelCase("hello_world") ➞ "helloWorld"
// toCamelCase("javascript_is_fun") ➞ "javascriptIsFun"

const toCamelCase = (str) => {
    let result = "";
    let newStr = "";
    let newArr = str.toLowerCase().split("_");
    for (let i = 1; i < newArr.length; i++){
        newStr += `${newArr[i][0].toUpperCase()}${newArr[i].substring(1)}`
    }
    result = `${newArr[0]}${newStr}`
    return console.log(result);
}

toCamelCase("hello_world");
toCamelCase("javascript_is_fun");

// Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
// Examples:
// dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

const dictionary = (str, arr) => {
    let result = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i].startsWith(str)) {
            result[i] = arr[i];
        }
    }
    return console.log(result)
}

dictionary("bu", ["button", "breakfast", "border"]);
dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]);
dictionary("beau", ["pastry", "delicious", "name", "boring"]);

// Create an array filled with your friends' and family's names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:
// [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!"

let friends = ["Maria", "Mike", "Paul", "Doven"];
for (let i = 0; i < friends.length; i++){
    console.log(`Hello ${friends[i]}!`);
}

// sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers).

const sumOfNumbers = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    
    return console.log(result);
}

sumOfNumbers([3, 5, 30, 70, 12]);
sumOfNumbers([1, 2, 3, 4, 5, 6]);
sumOfNumbers([2, 2, 2, 2]);