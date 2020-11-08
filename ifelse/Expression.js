let firstNumber = Math.floor(Math.random() * 1000);
let secondNumber = Math.floor(Math.random() * 1000);
let thirdNumber = Math.floor(Math.random() * 1000);

let firstFunction = firstNumber + secondNumber * thirdNumber;
let secondFunction = firstNumber % secondNumber + thirdNumber;
let thirdFunction = thirdNumber + firstNumber / secondNumber;
let fourthFunction = firstNumber * secondNumber + thirdNumber;

console.log("Max : "+ Math.max(firstFunction, secondFunction, thirdFunction, fourthFunction));
console.log("Min : "+ Math.min(firstFunction, secondFunction, thirdFunction, fourthFunction));