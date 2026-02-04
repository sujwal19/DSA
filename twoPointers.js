// Two Pointers

// There are three patterns for this:
// 1. Bruteforce
// 2. Better
// 3. Optimal

// BruteForce
let aee = [2, 5, 1, 7, 10];
let k = 14;
var longestSubarray = function (aee) {
  let maxLen = 0;
  for (let i = 0; i < aee.length; i++) {
    let sum = 0;
    for (let j = i; j < aee.length; j++) {
      sum += aee[j];
      if (sum <= k) {
        maxLen = Math.max(maxLen, j - i + 1);
      } else if (sum > k) break;
    }
  }
  return maxLen;
};
// console.log(longestSubarray(aee));

// Better
var longestSubarrayBetter = function (aee, k) {
  let l = 0; // constant
  let r = 0; // constant
  let maxLen = 0; // constant in typical longest
  let sum = 0;
  while (r < aee.length) {
    // constant
    sum += aee[r];
    while (sum > k) {
      // condition
      // constant
      sum -= aee[l]; // condition
      l++; // constant
    }
    if (sum <= k) {
      maxLen = Math.max(maxLen, r - l + 1); // constant
    }
    r++; // constant
  }
  return maxLen;
}; // tc = O(n + n) = O(2n). // sc = O(1)
// console.log(longestSubarrayBetter(aee, k));

//

//
let s = "abca";
// let s = "acbca";

var checkPalindrome = function (s, left, right) {
  let i = left;
  let j = right;
  let isPalindrome = true;

  while (i < j) {
    if (s.charAt(i) != s.charAt(j)) {
      isPalindrome = false;
      break;
    }
    i++;
    j--;
  }

  return isPalindrome;
};

var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s.charAt(left) != s.charAt(right)) {
      return (
        checkPalindrome(s, left + 1, right) ||
        checkPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};
// console.log(validPalindrome(s));

//

//
let nums = [-4, -1, 0, 3, 10];
var sortedSquares = function (nums) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  let result = new Array(n);
  let pos = n - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[pos] = nums[left] * nums[left];
      left++;
    } else {
      result[pos] = nums[right] * nums[right];
      right--;
    }
    pos--;
  }
  return result;
};
// console.log(sortedSquares(nums));

//

//...........
let numbers = [2, 7, 11, 15];
let target = 9;
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
};
// console.log(twoSum(numbers, target));

//

//
let str1 = "cabaabac";
var minimumLength = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] != s[right]) {
      break;
    } else {
      let char = s[left];

      while (left <= right && s[left] == char) {
        left++;
      }
      while (left <= right && s[right] == char) {
        right--;
      }
    }
  }
  return right - left + 1;
};
// console.log(minimumLength(str1));

//

//
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);

    maxWater = Math.max(maxWater, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
};
console.log(maxArea(height));
