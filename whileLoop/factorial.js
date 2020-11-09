const prompt = require('prompt-sync')();
let number = parseInt(prompt('Enter a number: '));

let factorial = 1;
if(number >= 1){
    let i = 1;
   while(i <= number){
       factorial *= i;
       i++;
   }
   console.log("Factorial of "+ number+" is "+ factorial);
}else{
    console.log("enter positive number");
}