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
    let result = 
}

makeItBigger(["matt", "sara", "lara"]);
makeItBigger(["samuel", "MARIA", "luke", "mary"]);
makeItBigger(["Cynthia", "Karen", "Jane", "Carrie"]);

