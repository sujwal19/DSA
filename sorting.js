let arr = [1, 5, 2, 3, 7, 4, 6];

// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort(arr));

// function selectionSort(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     let swapped = false;

//     for (let j = 0; j < n - i - 2; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }
//   return arr;
// }
// console.log(selectionSort(arr));

// function insertionSort(arr) {
//   n = arr.length;

//   for (let i = 1; i < n - 1; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = key;
//   }
// }
// console.log(insertionSort(arr));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = arr.length / 2;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i = i + 1;
    } else {
      result.push(right[j]);
      j = j + 1;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort(arr));
