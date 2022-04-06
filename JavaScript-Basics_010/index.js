//01.
// Erstelle ein Program, das ein gegebenes Array kopiert und zurückgibt. Drucke das Ergebnis in die Konsole.
//Beispiele:
//copyArray([12, 66, 10]) => [12, 66, 10]
//copyArray([5, -20, "Salem", true]) => [5, -20, "Salem", true]
//copyArray([]) => []

const copyArray = (...arr) => {
    let result = [];
    result = arr;
    return console.log(result);
}

copyArray([12, 66, 10]);
copyArray([5, -20, "Salem", true]);
copyArray([]);

//02. 
//Schreibe ein Programm, um ein String umzukehren. 
//Beispiele:
//reverseString("Hallo Welt") => tleW ollaH
//reverseString("Bonjour le monde") => ednom el ruojnoB

const reverseString = (str) => console.log(str.split("").reverse().join(""));

reverseString("Hallo Welt");
reverseString("Bonjour le monde");

//03. 
//Missing Number. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

// Examples:

// missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

const missingNums = (arr) => {
    let result = [];
    for (let i = 1; i <= 10; i++){
        if (arr.indexOf(i) == -1) {
            result.push(i)
        }
    }
    return console.log(result);
}

missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]);
missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]);
missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]);


//04. 
//Alphabetical Order. Create a function to sort a string into alphabetical order. NB: assume numbers, symbols and punctuation are not included in the string.
// i.e. alphaOrder("webdev") ➞ "bdeevw"

const alphaOrder = (str) => console.log(str.split("").sort().join(""))

alphaOrder("webdev")