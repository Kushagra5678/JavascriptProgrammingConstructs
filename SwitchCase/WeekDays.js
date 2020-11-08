const prompt = require('prompt-sync')();

let inp = parseInt(prompt('Enter a number: '));
let weekdays;
switch(inp) {
    case 1:
        weekdays = 'Monday';
        break;
    case 2:
        weekdays = 'Tuesday';
        break;
    case 3:
        weekdays = 'Wednesday';
        break;
    case 4:
        weekdays = 'Thursday';
        break;
    case 5:
        weekdays = 'Friday';
        break;
    case 6:
        weekdays = 'Saturday';
        break;
    case 7: 
        weekdays = 'Sunday';
        break;
    default:
        weekdays = 'Invalid Input';
}

console.log('The day of the week is: ' + weekdays);