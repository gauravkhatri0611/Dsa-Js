//Loops
for (let i = 0; i <= 4; i++) {
  console.log("Gk");
}

for (let i = 0; i <= 5; i++) {
  console.log("Hello Gaurav");
}

for (let i = 3; i < 5; i++) {
  console.log("Hi");
}

// for loop

for (let i = 2; i < 9; i = i + 2) {
  console.log(i);
}

//
for (let i = 10; i > 0; i--) {
  console.log(i);
}

for (let i = 5; i < 4; i++) {
  console.log("hi");
}

/* infinite loop
    for (let i = 1; i > 0; i++){
    console.log(i)
    }
 */

function greet(i) {
  console.log("Hello " + i);
}
for (let i = 0; i < 5; i++) {
  greet(i);
}

//How array and loops works

let arr = [10, 6, 2, 0, 8, 3];

//calculating the length of an array

console.log("length of an array is " + arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//print all the even numbers of the array

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

//print all the odd numbers of the array

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    console.log(arr[i]);
  }
}

//while loop

let i = 0;
while (i < 1) {
  console.log("Hi");
  i++;
}
