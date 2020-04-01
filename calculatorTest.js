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

// Function for testing
const getRandom = function(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const validNumber      = [0, 1, 2, 3, 100, 200, -10, -99, 0, 0.1, -0.2, "1", "0", "10101", " ", "",true];
const validOperation   = ["+", "-", "*", "/", "add", "subtract", "multiply", "divide"];
const invalidNumber    = ["Hello", "2005/12/12", undefined, "NaN", NaN, "abc", "$", "%", "."];
const invalidOperation = [".", ",", null, " ", "", 1, 0];

for (let i = 1; i <= 4; i++) {
  let testData = {
    num1: getRandom(validNumber),
    num2: getRandom(validNumber),
    operation: getRandom(validOperation)
  }
  console.log(`\nTest ${i}: ${testData.num1} ${testData.operation} ${testData.num2}`);
  calculate(testData);
}

for (let i = 1; i <= 4; i++) {
  let testData = {
    num1: getRandom(validNumber),
    num2: getRandom(validNumber),
    operation: getRandom(invalidOperation)
  }
  console.log(`\nTest ${i}: ${testData.num1}, ${testData.operation}, ${testData.num2}`);
  calculate(testData);
}

for (let i = 1; i <= 4; i++) {
  let testData = {
    num1: getRandom(invalidNumber),
    num2: getRandom(validNumber),
    operation: getRandom(validOperation)
  }
  console.log(`\nTest ${i}: ${testData.num1}, ${testData.operation}, ${testData.num2}`);
  calculate(testData);
}
