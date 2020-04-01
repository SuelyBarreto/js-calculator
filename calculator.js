// Title  : Calculator - Ada Cohort 13
// Author : Suely Barreto - Space
// Date   : April 2020

//Start the prompt
const prompt = require(`prompt`);
prompt.start();

// Function to turn a string into an integer
const checkInteger = function(input) {
  if (isNaN(input)) console.log(`"${input}" is not a valid number`);
  return parseInt(input);
}

const calculate = function(userInput) {
  let first  = checkInteger(userInput.num1);
  let second = checkInteger(userInput.num2);
  let operation = userInput.operation;
  let result    = 0;
  // Process Each Operation
  switch (operation) {
    case `add`:
    case `+`:
      result = first + second;
      console.log(`${first} + ${second} = ${result}`);
      break;
    case `subtract`:
    case `-`:
      result = first - second;
      console.log(`${first} - ${second} = ${result}`);
      break;
    case `multiply`:
    case `*`:
      result = first * second;
      console.log(`${first} * ${second} = ${result}`);
      break;
    case `divide`:
    case `/`:
      if (second === 0) {
        console.log( `Not a valid operation. Can't divide by zero (0).`);
      } else {
        result = first / second;
        console.log( `${first} / ${second} = ${result}`); 
      }
      break;
    case `exponent`:
    case `^`:
      result = first ^ second;
      console.log(`${first} ^ ${second} = ${result}`);
      break;
    case `modulo`:
    case `%`:
      if (second === 0) {
        console.log( `Not a valid operation. Can't divide by zero (0).`);
      } else {
        result = first % second;
        console.log( `${first} % ${second} = ${result}`); 
      }
      break;
    default:
      console.log( `"${operation}" is not a valid operation.`);
  } // end switch (operation)

} // end const calculate

const calculateUserInput = function(error, promptInput) {
  calculate(promptInput);
  console.log(`\nThanks for using the calculator!`);
}  
prompt.get(['num1','num2','operation'], calculateUserInput);


// Questions to ask and answer:
// What is promptInput? It's the Object where prompt.get sends the results of what you typed
  // What data type? It's an Object
  // What does it hold? The three inputs that we asked
  // What does it represent? The user input for the calculations
// How do we read values from it? What syntax? Using promptInput.inputname
// How can we use it? We can just pass the proptInput to the our calculate function
// Can we call our existing functions now, inside of this function? yes, of course.