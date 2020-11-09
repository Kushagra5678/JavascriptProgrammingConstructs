function reverseNo(number){
    let reverse=0;
    while(number!=0){
        reverse = reverse * 10 + number % 10;
        number=Math.floor(number/10);
    }
    return reverse;
}

function isPalindrome(x, y) {
    return x == reverseNo(y);
  }

const prompt = require('prompt-sync')();
let number1 = parseInt(prompt('Enter a number1: '));
let number2 = parseInt(prompt('Enter a number2: '));
  const args = process.argv.slice(2);
  if(isPalindrome(number1, number2)) console.log("palindrome");
  else console.log("not palindrome");