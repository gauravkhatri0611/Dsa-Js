function printHelloWorld() {
  console.log("Hello World");
}

printHelloWorld();

function greet(name) {
  console.log("Namaste" + name);
}

let x = "Ram";
greet(x);

//sum function
function sum(a, b) {
  let add = a + b;
  console.log(add);
}

sum(7, 10);
//multiplication function
function multiply(a, b) {
  let multiplication = a * b;
  console.log(multiplication);
}
multiply(2, 2);

//square of a function
function square(x) {
  let result = x * x;
  return result;
}
let value = square(23);
console.log(value);

// How if else works
// create a function if a person is eligible to vote or not

function eligibleToVote(age) {
  if (age < 18) {
    console.log("Not eligible to vote");
  } else {
    console.log("eligible to vote");
  }
}
eligibleToVote(-2);

//
function el(age) {
  if (age < 0) {
    console.log("invalid input");
  } else if (age < 18) {
    console.log("not eligible to vote");
  } else {
    console.log(" eligible");
  }
}

el(-1);
el(33);
el(10);

// function to check if a number is even or odd

function evenOrOdd(x) {
  if (x % 2 === 0) {
    console.log(x + " is Even Number");
  } else {
    console.log(x + " is odd Number");
  }
}
evenOrOdd(3);
//loops
