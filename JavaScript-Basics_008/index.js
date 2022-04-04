// write a function that greet you :)

const userData = process.argv.splice(2)

function greetMe(x) {
    result = `Hallo ${x}`
    return console.log(result);
}

greetMe(userData);

// greet all

const greetAll = (names) => {
    for (let i = 0; i < names.length; i++){
        console.log(`Hallo ${names[i]}`);
    }
}

greetAll(userData);

// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

// ------------------------

const calculateDogAge = (num) => {
    let result = "";
    humanAge = num * 7;
    result = `Your doggie is ${humanAge} years old in dog years!`
    return console.log(result);
}

calculateDogAge(11);

// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

// ------------------------


function calculateSupply(age, amount) {
    let maxAlter = 100;
    let restJahre = maxAlter - age;
    let tage = restJahre * 365;
    return console.log(`You will need ${tage * amount} to last you until the ripe old age of ${maxAlter}.`);
  }
  calculateSupply(10, 3)
  
  
// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

const celsiusToFahrenheit = (celsius) => {
    let result = "";
    let fahrenheit = celsius * 1.8 + 32;
    result = `${celsius}°C is ${fahrenheit}°F`
    return console.log(result);
} 

celsiusToFahrenheit(22);

const fahrenheitToCelsius = (fahrenheit) => {
    let result = "";
    let celsius = (fahrenheit - 32) * 5/9;
    result = `${fahrenheit}°F is ${celsius}°C`
    return console.log(result);
} 

fahrenheitToCelsius(22);

// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments

const tellFortune = (childNum, partnersName, location, job) => {
    let result = "";
    result = `You will be a ${job} in ${location}, and married to ${partnersName} with ${childNum} kids.`
    return console.log(result);
}

tellFortune(Math.round(Math.random() * 10), "your Wife", "Berlin", "Web Developer")

// Write a JavaScript function that generates a string passing a specified length of random characters. AKA password generator
// // use the following chrList
//  let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const passwordGenerator = () => {
    let result = "";
    let passwordLaenge = 10
    for (let i = 0; i < passwordLaenge; i++){
        result += charList[Math.round(Math.random() * charList.length)] 
    }

    return console.log(result);
}
passwordGenerator()

// Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

const exponentialValues = (num1, num2) => {
    let result = [];
    for (let i = 0; i <= num2; i++){
        result[i] = Math.pow(num1, i)
    }
    return console.log(result.splice(1));
}

exponentialValues(3, 5)
