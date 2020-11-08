console.log("Welcome to javascript programming constructs");

//Case 1:
let digit = Math.floor(Math.random() * 10);
console.log("single digit number generated : " + digit);

//Case2:
let numberOnDice = (Math.floor(Math.random() * 10) % 6) + 1;
console.log("Number On Dice : " + numberOnDice);

//Case3:
let firstNumber = (Math.floor(Math.random() * 10) % 6) + 1;
let secondNumber = (Math.floor(Math.random() * 10) % 6) + 1;
console.log("Sum of Two Dice Numbers: " + (firstNumber + secondNumber));

//Case5a:
const FEET_TO_INCH = 12;
console.log("42 inches = "+ 42/FEET_TO_INCH+" ft");

//Case5b:
const FEET_TO_METER = 0.3048;
console.log("area of plot : "+ (60*40)*FEET_TO_METER*FEET_TO_METER);

//Case5c:
const ACRE_TO_SQUARE_FOOT = 43560;
console.log("area os 25 such plots in acre : "+ (60*40)/ACRE_TO_SQUARE_FOOT);