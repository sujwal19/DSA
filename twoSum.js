// Find two sum in Array

// Method #1 Bruteforce
// let arr = [2, 6, 5, 8, 11];
// let target = 14;

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         console.log(nums.indexOf(nums[i]), nums.indexOf(nums[j]));
//         break;
//       }
//     }
//   }
// };

// twoSum(arr, target);

// Metod #2
let arr = [2, 6, 5, 8, 11];
let target = 14;

var twoSum = function (nums, target) {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (seen[complement] !== undefined) {
      return [seen[complement], i];
    }
    seen[nums[i]] = i;
  }
};

console.log(twoSum(arr, target));
