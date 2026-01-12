// // print Array
// function printArr(arr, i = 0) {
//   if (i == arr.length) return;
//   console.log(arr[i]);
//   printArr(arr, i + 1);
// }
// printArr([2, 3, 6, 8, 9]);

//

// // Reverse Array
// function reverseArray(arr, i = 0) {
//   if (i == arr.length) return;
//   reverseArray(arr, i + 1);
//   console.log(arr[i]);
// }
// reverseArray([2, 3, 4, 6, 7]);

//

// // Sum of array
// function addSum(arr, i = 0) {
//   if (i == arr.length) return 0;
//   return arr[i] + addSum(arr, i + 1);
// }
// console.log(addSum([12, 23, 34, 56, 14]));

//

// // max element
// function maxElem(arr, i = 0) {
//   if (i === arr.length) return 0;
//   return Math.max(arr[i], maxElem(arr, i + 1));
// }
// console.log(maxElem([12, 34, 56, 78, 45, 67]));

//

// check sorted --
// function sortedElem(arr, i = 0) {
//   if (i == arr.length - 1) return true;
//   if (arr[i] > arr[i + 1]) return false;
//   return sortedElem(arr, i + 1);
// }

// console.log(sortedElem([3, 5, 6, 7, 8]));
