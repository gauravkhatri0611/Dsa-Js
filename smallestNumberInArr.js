//4. Find the smallest number in an arr

let arr = [2, 23, 25, 5, -1, -90, 100];
let smallest = arr[0];
function smallestNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
let result = smallestNumber(arr);
console.log(result);
