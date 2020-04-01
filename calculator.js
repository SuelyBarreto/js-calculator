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
  // Process Each Operation
  switch (operation) {
    case `add`:
    case `+`:
      let addition = first + second;
      console.log(`${first} + ${second} = ${addition}`);
      break;
    case `subtract`:
    case `-`:
      let subtraction = first - second;
      console.log(`${first} - ${second} = ${subtraction}`);
      break;
    case `multiply`:
    case `*`:
      let multiplication = first * second;
      console.log(`${first} * ${second} = ${multiplication}`);
      break;
    case `divide`:
    case `/`:
      if (second === 0) {
        console.log( `Not a valid operation. Can't divide by zero (0).`);
      } else {
        let division = first / second;
        console.log( `${first} / ${second} = ${division}`); 
      }
      break;
    default:
      console.log( `"${operation}" is not a valid operation.`);
  } // end switch (operation)

}

// 
// const calculateUserInput = function(error, promptInput) {
//   calculate(promptInput);
//   console.log(`\nThanks for using the calculator!`);
// }  
// prompt.get(['num1','num2','operation'], calculateUserInput);

// Questions to ask and answer:
// What is promptInput? It's the Object where prompt.get sends the results of what you typed
  // What data type? It's an Object
  // What does it hold? The three inputs that we asked
  // What does it represent? The user input for the calculations
// How do we read values from it? What syntax? Using promptInput.inputname
// How can we use it? We can just pass the proptInput to the our calculate function
// Can we call our existing functions now, inside of this function? yes, of course.

// Function for testing
const getRandom = function(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const testNumber    = [0, 1, 2, 3, 100, 200, -10, -99, 0, 0.1, -0.2, null, "1", "0", "10101", "abc", "$", "%", " ", "", "."];
const testOperation = ["+", "-", "*", "/", "add", "subtract", "multiply", "divide", ",", ".", null, " ", "", 1, 0];
for (let i = 1; i <= 10; i++) {
  let testData = {
    num1: getRandom(testNumber),
    num2: getRandom(testNumber),
    operation: getRandom(testOperation)
  }
  console.log(`\nTest ${i}: ${testData.num1}, ${testData.operation}, ${testData.num2}`);
  calculate(testData);
}
