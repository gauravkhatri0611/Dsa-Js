//2. Write a function that return the number of negative numbers in an array

let arr = [2, -9, 17, 0, 1, -10, -4, 8];
let counter = 0;

function countNegative(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      counter++;
    }
  }
  return counter;
}
let result = countNegative(arr);
console.log(result);
