// [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!"

let firstArr = ["Maria", "Mike", "Paul", "Doven"];

for (let i = 0; i < firstArr.length; i++){
    firstArr[i] = `Hello ${firstArr[i]}!`;
    console.log(firstArr[i]);
}

// [Susan, Rezvane, Hadi] ➞ expected bonus output: "Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Hadi is at index 2 of my friends and family array."

let friends = ["Susan", "Rezvane", "Hadi"];

for (let i = 0; i < friends.length; i++){
    friends[i] += `${friends[i]} is at index ${i} of my friends and family array`;
    console.log(`${friends[i]}`);
}

// City Names. Create an array of city names. Loop through the array and add the city names to a string. Examples:
// [Berlin, Paris, Prague, Rome] ➞ expected output: "Berlin, Paris, Prague, Rome."

let cities = ["Berlin", "Paris", "Prague", "Rome"];

for (let i = 0; i < cities.length; i++){
    let cityStr = "";
    cityStr = `${cities[i]}${i == cities.length - 1 ? "." : ","}`;
    console.log(cityStr);
}

// These exercises are designed for practicing arrays and array methods. You may need to look up some methods to complete these tasks. Print each result to the console.

// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let anotherVar = euroCities[1];

console.log(euroCities);
console.log(anotherVar);

// Change the first item in the array to "Berlin".

euroCities[0] = "Berlin";

console.log(euroCities);

// Print the length of the array "euroCities".

console.log(euroCities.length);

// Remove the last item of the array "euroCities".

euroCities.pop();

console.log(euroCities);

// Use an array method to add "Budapest" to the euroCities array.

euroCities.push("Budapest");

console.log(euroCities);

// Bonus: Remove the second and third items from the euroCities array.

euroCities.splice(1, 2);

console.log(euroCities);

// Create another variable named asianCities and assign an array of at least 5 cities to the variable

let asianCities = ["Dubai", "Hong Kong", "Istanbul", "Tokyo", "Shanghai"];

// Capitalize. Create a program that capitalizes the first letter of each element in an array of names. Examples:
// ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]
// ["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]
// ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

const makeItBigger = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        result[i] = `${arr[i][0].toUpperCase()}${arr[i].substring(1).toLowerCase()}`;
    }
    return console.log(result);
}

makeItBigger(["matt", "sara", "lara"]);
makeItBigger(["samuel", "MARIA", "luke", "mary"]);
makeItBigger(["Cynthia", "Karen", "Jane", "Carrie"]);

// Repeat it. Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array. Examples:
// ("example", 3) ➞ ["example", "example", "example"]

const repeatIt = (str, num) => {
    let item = str;
    let times = num;
    let result = [];
    for (let i = 0; i <= times; i++){
        result[i] = item;
    }
    return console.log(result);
}

repeatIt("Tom", 3);
repeatIt("Koji", 6);

// Word Ranking. Create a function that takes a string of words and returns the word with the most characters.
// wordRank("Check back tomorrow, man!") ➞ "tomorrow"
// wordRank("Today is Wednesday.") ➞ "Wednesday"

const wordRank = (str) => {
    let result = "";
    let strToArr = str.split(" ");
    for (let i = 0; i < strToArr.length; i++){
        if (result.length < strToArr[i].length) {
            result = strToArr[i];
        }
    }
    return console.log(result);
}

wordRank("Check back tomorrow, man!")
wordRank("Today is Wednesday.")

// The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.
// i.e.
// findGreatest([3, 4, 5], 4) ➞ 5
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10

const findGreatest = (arr, num) => {
    let result = "";
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > num) {
            result += `${arr[i]} `;
        }
    } 
    return console.log(result);
}

findGreatest([3, 4, 5], 4);
findGreatest([10, 20, 30], 12)
findGreatest([0, 10, 3], 4);