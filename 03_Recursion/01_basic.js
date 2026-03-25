var sum = function (nums, i = 0) {
  if (i === nums.length) return 0;
  return nums[i] + sum(nums, i + 1);
};
console.log(sum([1, 5, 7, 8]));
