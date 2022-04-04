const arr1 = ["Hi", "cool"];
const arr2 = ["das", "du", "da", "bist"];
const totalArray = arr1.concat(arr2, ["lol"]);
console.log(totalArray);

function iPrint(str, num, arr) {
    return console.log(`I had an array ${arr} and a number ${num} and a string ${str}.`)
}

iPrint("Nice", 27, ["No this", "Not cool"] );

function sum(x, y) {
    return console.log(x + y);
}
const userData = process.argv.splice(2)
console.log(userData);

sum(parseInt(userData[0]), parseInt(userData[1]));

