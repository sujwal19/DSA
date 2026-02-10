// Rotated Array
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (target === nums[mid]) return mid;
    // left sorted
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target <= nums[mid]) {
        high = mid - 1;
      } else low = mid + 1;
    } else {
      if (nums[high] >= target && target >= nums[mid]) {
        low = mid + 1;
      } else high = mid - 1;
    }
  }
  return -1;
};

// Missing Number - XOR Method
var missingNumber = function (nums) {
  const n = nums.length;
  let xor = 0;

  // XOR all numbers from 0 to n
  for (let i = 0; i <= n; i++) {
    xor ^= i;
  }

  // XOR all numbers in the array
  for (let num of nums) {
    xor ^= num;
  }

  return xor;
};
