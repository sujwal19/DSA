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

//
nums = [1, 1, 1, 1, 1];
target = 1;
// true

//

// var search = function (nums, target) {
//   let low = 0;
//   let high = nums.length - 1;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     if (nums[mid] == target) return true;

//     if (nums[low] == nums[mid] && nums[mid] == nums[high]) {
//       low = low + 1;
//       high = high - 1;
//     } else if (nums[low] <= nums[mid]) {
//       if (nums[low] <= target && target <= nums[mid]) {
//         high = mid - 1;
//       } else {
//         low = mid + 1;
//       }
//     } else {
//       if (nums[mid] <= target && target <= nums[high]) {
//         low = mid + 1;
//       } else {
//         high = mid - 1;
//       }
//     }
//   }
//   return false;
// };

// //

// console.log(search(nums, target));
// let nums = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7, 8];
// let nums = [5, 7, 7, 8, 8, 10];

// function binarySearch(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] == target) {
//       return mid;
//     } else if (nums[mid] > target) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return left;
// }

// var lowerBound = function (nums, target) {
//   let left = 0,
//     right = nums.length - 1;
//   let ans = nums.length;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] >= target) {
//       ans = mid;
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return ans;
// };

// var upperBound = function (nums, target) {
//   let left = 0,
//     right = nums.length - 1;
//   let ans = nums.length;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] > target) {
//       ans = mid;
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return ans;
// };
// console.log(lowerBound(nums, 2));
// console.log(upperBound(nums, 2));

// var countOccurrences = function (nums, target) {
//   return upperBound(nums, target) - lowerBound(nums, target);
// };

// function firstOcuurance(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let ans = -1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] >= target) {
//       ans = mid;
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return ans;
// }

// var searchRange = function (nums, target) {
//   function firstOccurance(nums, target) {
//     let first = -1;
//     let low = 0;
//     let high = nums.length - 1;

//     while (low <= high) {
//       let mid = Math.floor((low + high) / 2);
//       if (nums[mid] === target) {
//         first = mid;
//         high = mid - 1;
//       } else if (nums[mid] < target) {
//         low = mid + 1;
//       } else {
//         high = mid - 1;
//       }
//     }
//     return first;
//   }

//   function lastOccurance(nums, target) {
//     let last = -1;
//     let low = 0;
//     let high = nums.length - 1;

//     while (low <= high) {
//       let mid = Math.floor((low + high) / 2);
//       if (nums[mid] == target) {
//         last = mid;
//         low = mid + 1;
//       } else if (nums[mid] < target) {
//         low = mid + 1;
//       } else {
//         high = mid - 1;
//       }
//     }
//     return last;
//   }

//   let first = firstOccurance(nums, target);
//   if (first == -1) return [-1, -1];
//   let last = lastOccurance(nums, target);
//   return [first, last];
// };

let nums = [3, 4, 5, 6];

var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length;
  let ans = nums.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};

console.log(searchInsert(5, 6));
