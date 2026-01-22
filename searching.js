// let nums = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7, 8];
let nums = [5, 7, 7, 8, 8, 10];

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

var searchRange = function (nums, target) {
  function firstOccurance(nums, target) {
    let first = -1;
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        first = mid;
        high = mid - 1;
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return first;
  }

  function lastOccurance(nums, target) {
    let last = -1;
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] == target) {
        last = mid;
        low = mid + 1;
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return last;
  }

  let first = firstOccurance(nums, target);
  if (first == -1) return [-1, -1];
  let last = lastOccurance(nums, target);
  return [first, last];
};

console.log(searchRange(nums, 8));
