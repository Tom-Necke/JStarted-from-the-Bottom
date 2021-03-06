//05. 
//Where Have My Four Letter Words Gone? Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

// Examples:

// isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
// isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
// isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]

const isFourLetters = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length == 4) {
            result.push(arr[i])
        }
    }
    return console.log(result);
}

isFourLetters(["John", "James", "Jack", "Jeanne"]);
isFourLetters(["Tomato", "Corn", "Lettuce"]);
isFourLetters(["Dog", "Cat", "Deer"]);

console.log("---------------------------------------");

//06 
//Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:

// For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.
// The given integer will always be equal to or greater than 1.
// Include the given number (the number in the parameters).
// Examples:

// amplify(4) ➞ [1, 2, 3, 40]
// amplify(3) ➞ [1, 2, 3]
// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

const amplify = (num) => {
    let result = [];
    for (let i = 1; i <= num; i++){
        if (i % 4 != 0) {
            result.push(i);
        } else {
            result.push(i * 10);
        }
    }
    return console.log(result);
}

amplify(4);
amplify(3);
amplify(25);

console.log("---------------------------------------");

//07
//One is not like the others... Create a function that takes an array of numbers and return the number that's unique.

// Examples:

// unique([3, 3, 3, 7, 3, 3]) ➞ 7
// unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

const unique = (arr) => {
    let result = [];
    for (i = 0; i < arr.length; i++){
        if (result.indexOf(arr[i]) == -1){
            result.push(arr[i]);
        } 
    }
    return console.log(result);
}

unique([3, 3, 3, 7, 3, 3]);
unique([0, 0, 0.77, 0, 0]);
unique([0, 1, 1, 1, 1, 1, 1, 1]);

console.log("--------------Hallo-------------------------");

//08.
// c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

// Examples:

// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

const hackerSpeak = (str) => {
    let result = "";
    let newArr = str.split("");
    for (let i = 0; i < newArr.length; i++){
        if (newArr[i] == "a") {
            newArr[i] = "4";
        } else if (newArr[i] == "e") {
            newArr[i] = "3";
        } else if (newArr[i] == "i") {
            newArr[i] = "1";
        } else if (newArr[i] == "o") {
            newArr[i] = "0";
        } else if (newArr[i] == "s") {
            newArr[i] = "5";
        }
    }
    result = newArr.join("")
    return console.log(result);
}

hackerSpeak("javascript is cool");
hackerSpeak("programming is fun");
hackerSpeak("become a coder");

console.log("---------------------------------------");

//09.
// Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. NB: A number is symmetrical when it is the same as its reverse.

// Examples:

// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true

const isSymmetrical = (num) => {
    let result = ""
    let newArr = `${num}`.split("");
    let newSTr = newArr.join("");
    let reverseSTR = newArr.reverse().join("")
    if (newSTr == reverseSTR) {
        result = true;
    } else {
        result = false;
    }
    return console.log(result);
}

isSymmetrical(7227);
isSymmetrical(12567);
isSymmetrical(44444444);
isSymmetrical(9939);
isSymmetrical(1112111);;

console.log("---------------------------------------");

//10.
//Buggy Code (Part 6)
// Mubashir wants to remove numbers from a given string!
// Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// Examples
// removeNumbers("mubashir1") ➞ "mubashir"
// removeNumbers("12ma23tt") ➞ "matt"
// removeNumbers("e1d2a3b4i5t6") ➞ "edabit"

const removeNumbers = (str) => {
    let result = str.replace(/[0-9]/g, '');
    return console.log(result);
}

removeNumbers("mubashir1");
removeNumbers("12ma23tt");
removeNumbers("e1d2a3b4i5t6");

console.log("---------------------------------------");

//11.
//Check if One Array can be Nested in Another
//Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false

const canNest = (arr1, arr2) => {
    let result;
    if (Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)) {
        result = true;
    } else {
        result = false
    }
    return console.log(result);
}
 
canNest([1, 2, 3, 4], [0, 6]);
canNest([3, 1], [4, 0]);
canNest([9, 9, 8], [8, 9]);
canNest([1, 2, 3, 4], [2, 3]);

console.log("---------------------------------------");

//12.
//Tuck in Array
//Create a function that takes two arrays and insert the second array in the middle of the first array.
//Examples
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

const tuckIn = (arr1, arr2) => {
    let result = [];
    result = [arr1[0], arr2, arr1[1]]
    return console.log(result);
}

tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]);
tuckIn([15,150], [45, 75, 35]);
tuckIn([[1, 2], [5, 6]], [[3, 4]]);

console.log("---------------------------------------");

//13.
//Number Split
//Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
//Examples
// numberSplit(4) ➞ [2, 2]
// numberSplit(10) ➞ [5, 5]
// numberSplit(11) ➞ [5, 6]
// numberSplit(-9) ➞ [-5, -4]

const numberSplit = (num) => {
    let result = [];
    let numOne = Math.floor(num / 2);
    let numTwo = num - numOne;
    result.push(numOne, numTwo)
    return console.log(result);
}

numberSplit(4)
numberSplit(10)
numberSplit(11)
numberSplit(-9)

console.log("---------------------------------------");