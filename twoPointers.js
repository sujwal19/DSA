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
console.log(longestSubarrayBetter(aee, k));
