// Miserable Parody of a Calculator
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
// Examples
// calculator("23+4") ➞ 27
// calculator("45-15") ➞ 30
// calculator("13+2-5*2") ➞ 5
// calculator("49/7*2-3") ➞ 11


function calculator(exp) {
    return eval(exp);
}
    
console.log(calculator("23+4"));
console.log(calculator("45-15"));
console.log(calculator("13+2-5*2"));
console.log(calculator("49/7*2-3"));

// Visa oer Master, write a function that checks if the user has entered a valid card data
// Example:
// 412178679036597 -> this is Visa card, I need your money
// 512178679036597 -> this is Master card, I need your money
// 34121786790365 -> this is AmEpx card, I need your money
// 11111 -> this is not correct
// de343ee -> this is not correct

const wichCard = (num) => {
    if (num.length == 15 && num.startsWith(4)) return "this is Visa card, I need your money";
    if (num.length == 15 && num.startsWith(5)) return "this is Master card, I need your money";
    if (num.length == 14) return "this is AmEpx card, I need your money";
    if (isNaN(num) || num.length < 15) return "this is not correct";
}

console.log(wichCard("412178679036597"));
console.log(wichCard("512178679036597"));
console.log(wichCard("34121786790365"));
console.log(wichCard("11111"));
console.log(wichCard("de343ee"));

// Phone number, Write a function that checks if a user give a correct German (landline Berlin 030) phone number
// 030-1247893 -> I'll call now
// 333-332222 -> this is not a phone number
// 030-33 -> This is not complete !

const germanNumCheck = (str) => {
    if (str.substring(0, 3) == "030" && str.length == 11) return "I'll call now";
    if (str.substring(0, 3) == "030" && str.length < 11) return "This is not complete !";
    if (str.substring(0, 3) != "030") return "this is not a phone number";
}
                            
console.log(germanNumCheck("030-1247893"));
console.log(germanNumCheck("333-332222"));
console.log(germanNumCheck("030-33"));