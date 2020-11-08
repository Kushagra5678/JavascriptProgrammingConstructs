const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter the number which is Tenth's power : "));
let numInWords;
if (number == 1) {
    numInWords = 'Unit';
} else if (number == 100) {
    numInWords = 'Hundred'
} else if (number == 1000) {
    numInWords = 'Thousand'
} else if (number == 10000) {
    numInWords = 'Ten Thousand'
} else {
    console.log("Please enter correct input!");
}

console.log("Number in Word is: " + numInWords);