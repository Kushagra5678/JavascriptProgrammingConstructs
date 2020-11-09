const prompt = require('prompt-sync')();
let number = parseInt(prompt('Enter a number: '));
//console.log(" is not a prime number");
let j = 1;
while(j <= number){
    let count = 0;
    let i = 2;
    while (i <= Math.sqrt(j)) {
        if (j % i == 0) count++;
        i++;
    }
    j++;
    if (count == 0 && j > 1) console.log(j + " is a prime number");
    else console.log(j + " is not a prime number");
}