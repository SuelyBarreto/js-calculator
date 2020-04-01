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
      result = Math.pow(first, second);
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

const schema = {
  properties: {
    num1: {
      description: 'Enter first number',
      type: 'integer',
      message: 'Please enter a number',
      required: true
    },
    num2: {
      description: 'Enter second number',
      type: 'integer',
      message: 'Please enter a number',
      required: true
    },
    operation: {
      description: 'Enter operation',
      type: 'string',
      message: 'Please enter a number',
      required: true
    }
  }
};

console.log(`Welcome to the Calculator!`);
console.log(`Enter two numbers and an operation.`);
console.log(`Valid operations are: add (+), subtract (-), multiply (*), divide (/), exponent (^) and modulo (%).`);
prompt.get(schema, calculateUserInput);


// {
//   description: 'Enter your password',     // Prompt displayed to the user. If not supplied name will be used.
//   type: 'string',                 // Specify the type of input to expect.
//   pattern: /^\w+$/,                  // Regular expression that input must be valid against.
//   pattern: /^[0-9]+$/,
//   message: 'Password must be letters', // Warning message to display if validation fails.
//   hidden: true,                        // If true, characters entered will either not be output to console or will be outputed using the `replace` string.
//   replace: '*',                        // If `hidden` is set it will replace each hidden character with the specified string.
//   default: 'lamepassword',             // Default value to use if no value is entered.
//   required: true                        // If true, value entered must be non-empty.
//   before: function(value) { return 'v' + value; } // Runs before node-prompt callbacks. It modifies user's input
// }


// Questions to ask and answer:
// What is promptInput? It's the Object where prompt.get sends the results of what you typed
  // What data type? It's an Object
  // What does it hold? The three inputs that we asked
  // What does it represent? The user input for the calculations
// How do we read values from it? What syntax? Using promptInput.inputname
// How can we use it? We can just pass the proptInput to the our calculate function
// Can we call our existing functions now, inside of this function? yes, of course.