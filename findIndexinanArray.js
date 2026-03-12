//1. Write a function that searches for an element in an array and returns the index, if the element is not present then just returns -1

let arr = [4, 2, 0, 10, 8, 30];

//Answer

function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}
let result = searchElement(arr, 20);
console.log(result);
//the output should be searchElement(arr, 0) then it is 2 i.e 2nd index
