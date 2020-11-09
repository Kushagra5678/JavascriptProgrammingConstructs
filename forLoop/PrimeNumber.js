const prompt = require('prompt-sync')();
let number = parseInt(prompt('Enter a number: '));
//console.log(" is not a prime number");
for(let j = 1; j <= number ; j++){
    let count = 0;
    for (let i = 2; i <= Math.sqrt(j); i++) {
        if (j % i == 0) count++;
    }
    if (count == 0 && j > 1) console.log(j + " is a prime number");
    else console.log(j + " is not a prime number");
}
//console.log(" is not a prime number");