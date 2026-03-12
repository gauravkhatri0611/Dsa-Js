//5. Find Second Largest Number in an array
let arr = [4, 4, 2];
let firstLargest = -Infinity;
let secondLargest = -Infinity;

function secondLargestNumber(arr) {
  if (arr.length < 2) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let res = secondLargestNumber(arr);
console.log(res);

// corner cases
//1. Array is empty
//2. array only has one element
//3. array has all duplicate elements
