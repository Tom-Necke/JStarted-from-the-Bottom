// Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%
// If the person has already retired then the message 'You're already retired!' should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
// Output: $30000

const howMuchMoney = (curAge, retAge, earns, saves) => {
    let savedPerMonth = earns / 100 * saves;
    let yearsMonth = (retAge - curAge) * 12;
    if (curAge < retAge) {
        return console.log(yearsMonth * savedPerMonth);
    } else {
        return console.log("You're already retired!");
    }
} 
howMuchMoney(40, 60, 1000, 10);

((curAge, retAge, earns, saves) => {
    let savedPerMonth = earns / 100 * saves;
    let yearsMonth = (retAge - curAge) * 12;
    if (curAge < retAge) {
        return console.log(yearsMonth * savedPerMonth);
    } else {
        return console.log("You're already retired!");
    }
})(40, 65, 2000, 5);

// Write a function that checks if a user give a correct German bank account
// Example:
// DE3333 -> this is not a complete bank account please check
// QQ -> this is not a bank account
// DE33nn54637 -> this is a wrong bank account
// DE12345678901234567890 -> this is correct, I'll take your money :);

const bankAccCheck = (str) => {
    let countryCode = str.substring(0, 2).toUpperCase();
    let accLength = str.length;
    let pureNum = isNaN(str.substring(2))
    if (countryCode != "DE") return "this is not a bank account";
    if (accLength != 22) return "this is not a complete bank account please check";
    if (pureNum) return "this is a wrong bank account";
    if (countryCode == "DE" && accLength == 22 && pureNum == false) {
        return "this is correct, I'll take your money :)";
    }
}

console.log(bankAccCheck("DE12345"));
console.log(bankAccCheck("QQ12345678901234567890"));
console.log(bankAccCheck("DE12345nn8901234567890"));
console.log(bankAccCheck("DE12345678901234567890"));

