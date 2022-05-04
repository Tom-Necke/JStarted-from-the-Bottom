// Create a function that returns the given argument, but by using an arrow function.
// An arrow function is constructed like so:
// arrowFunc=(/*parameters*/)=>//code here
// Examples
// arrowFunc(3) ➞ 3
// arrowFunc("3") ➞ "3"
// arrowFunc(true) ➞ true

const arrowFunc = (par) => console.log(par);

arrowFunc(3);
arrowFunc("3");
arrowFunc(true);


// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
// Create a function which calculates the amount of fuel it needs, given the distance.
// Examples
// calculateFuel(15) ➞ 150
// calculateFuel(23.5) ➞ 235
// calculateFuel(3) ➞ 100

const calculateFuel = (num) => console.log(num * 10 < 100 ? 100 : num * 10);

calculateFuel(15);
calculateFuel(23.5);
calculateFuel(3);

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Examples
// points(1, 1) ➞ 5
// points(7, 5) ➞ 29
// points(38, 8) ➞ 100

const points = (two, three) => console.log(two * 2 + three * 3);

points(1, 1);
points(7, 5);
points(38, 8); 