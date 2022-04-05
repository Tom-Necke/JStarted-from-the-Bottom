// The Coffee Company

function iDoCoffee() {
    let milk = iHaveMilk();
    let sweetener = iHaveSweetener();
    let eis = iHaveEis();
    let spoon = iHaveSpoon();

    return `your coffee with ${milk} ${sweetener} ${eis} and a ${spoon} is ready.`
}

const iHaveMilk = () => `Milk`;
const iHaveSweetener = () => `Something sweet`;
const iHaveEis = () => `Eis`;
const iHaveSpoon = () => `Spoon` 

console.log(iDoCoffee());

// map 

const names = ["Ali", "Nancy", "Olga", "Steel"];
const greetingArr = names.map((name, i) => `Hey ${name} your index num is ${i}`)

console.log(greetingArr);

// AEIOU:
// Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4
// ---------------------------------

const findVowels = (str) => {
    let result = 0;
    let vowels = "AEIOUaeiou";
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
            result++
        }
    }
    return console.log(result);
}

findVowels("Hallo ich bin Tom");

// No Duplicates!
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]
// ---------------------------------

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

// is Palindrome AKA word that reads the same backward or forward.
// Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat
// -------------------------------

const palindromeCheck = (word) => {
    let result = "";
    let newArr = word.split("").reverse().join("");
    if (word == newArr) {
        result = `cool ${word} is a palindrome`
    } else {
        result = `no palindrome`
    }


    return console.log(result);
} 
 
palindromeCheck("tarrattarrat");
palindromeCheck("Tom");
palindromeCheck("madam");

// This question has 2 parts
// Part a) write a function that takes in a number and does a console.log("Even 10!") if the number is evenly divisable by 10. Examples:
// printIfDivisibleByTen(1) --> no output
// printIfDivisibleByTen(2) --> no output
// printIfDivisibleByTen(32) --> no output
// printIfDivisibleByTen(10) --> "Even 10!" into the console
// printIfDivisibleByTen(30) --> "Even 10!" into the console
// printIfDivisibleByTen(90000) --> "Even 10!" into the console
// Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.
// ----------------------------

const printIfDivisibleByTen = (num) => {
    let result = "";
    if (num % 10 == 0) {
        result = "Even 10!"
    }

    return console.log(result);
}

printIfDivisibleByTen(1);
printIfDivisibleByTen(2);
printIfDivisibleByTen(32);
printIfDivisibleByTen(10);
printIfDivisibleByTen(30);
printIfDivisibleByTen(90000);

for (let i = 0; i <= 125; i++){
    printIfDivisibleByTen([i])
}

// Write an arrow function that takes in 5 numbers as its parameters and returns the largest one

const largestNum = (...num) => {
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        if (result < num[i]) {
            result = num[i]
        }
    }

    return console.log(result);
} 

largestNum(5, 6, 3, 2, 7, 9);
