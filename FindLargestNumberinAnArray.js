//3. Find largest number in an array

let arr = [5, 19, 21, 43, 5, 4, 7, 5, 5];
let largest = arr[0]; // or let largest = -Infinity;
function largestNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let result = largestNumber(arr);
console.log(result);
