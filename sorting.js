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

// let s = "anagram";
// let t = "naoaram";
// var isAnagram = function (s, t) {
//   let count = {};
//   for (let char of s) {
//     count[char] = (count[char] || 0) + 1;
//   }
//   for (let char of t) {
//     if (!count[char]) return false;
//     count[char] -= 1;
//   }
//   return true;
// };
// console.log(isAnagram(s, t));

let nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
//

var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return true;

    // Case 1: duplicates block us
    if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
      low++;
      high--;
    }
    // Case 2: left half sorted
    else if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // Case 3: right half sorted
    else {
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false;
};

//

console.log(search(nums, 13));
