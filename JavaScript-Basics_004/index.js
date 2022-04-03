// Write a program to add up the numbers 1 to 20.

let sum = 0;

for (let i = 1; i <= 20; i++){
    sum += i;
}
console.log(sum);

//  Write a program that will output,
// "There is 1 bottle of beer on the wall."
// "There are 2 bottles of beer on the wall" up until there are five bottles.

let numOne = 0;

for (let i = 1; i <= 5; i++){
    numOne += 1
    console.log(i == 1 ? `there is ${i} bottle of beer on the wall.` : `there are ${i} bottles of beer on the wall.`);
}

