const prompt = require('prompt-sync')();

let number = prompt('Enter a number Between 1 And 9: ');
let numInWords;
if (number == 1) {
    numInWords = 'One';
} else if (number == 2) {
    numInWords = 'Two';
} else if (number == 3) {
    numInWords = 'Three';
} else if (number == 4) {
    numInWords = 'Four';
} else if (number == 5) {
    numInWords = 'Five';
} else if (number == 6) {
    numInWords = 'Six';
} else if (number == 7) {
    numInWords = 'Seven';
} else if (number == 8) {
    numInWords = 'Eight';
} else if (number == 9) {
    numInWords = 'Nine';
}

console.log("number in words is: "+numInWords);