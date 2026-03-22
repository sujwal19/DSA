//

// Master Template
// let l = 0;
// for (let i = 0; i < nums.length; i++) {
//     if condition(nums[r]){
//         nums[l] = nums[r];
//         l += 1;
//     }
// }

//

// LC- Remove Duplicates from sorted Array

var removeDuplicates = function (nums) {
  let l = 0;
  let r = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[l] !== nums[r]) {
      r++;
      nums[r] = nums[l];
    }
  }
  return r + 1;
};

let removeDuplicate = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
// console.log(removeDuplicate);

//
// lc-27 Remove Element
// Approach

var removeElement = function (nums, val) {
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] !== val) {
      if (nums[l] !== nums[r]) nums[l] = nums[r];
      l++;
    }
  }
  return l;
};
let removeElem = removeElement([3, 2, 2, 3], 3);
// console.log(removeElem);

//

// LC-283  Move Zeroes

var moveZeroes = function (nums) {
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] !== 0) {
      nums[l] = nums[r];
      l++;
    }
  }
  while (l < nums.length) {
    nums[l] = 0;
    l++;
  }
  return nums;
};

let moveZero = moveZeroes([0, 1, 0, 3, 12]);
// console.log(moveZero);

// LC - 977. Squares of a Sorted Array

var sortedSquares = function (nums) {
  let n = nums.length;
  let le = 0;
  let ri = n - 1;
  let pos = n - 1;
  let res = new Array(n);

  while (le <= ri) {
    if (Math.abs(nums[le]) > Math.abs(nums[ri])) {
      res[pos] = nums[le] * nums[le];
      le++;
    } else {
      res[pos] = nums[ri] * nums[ri];
      ri--;
    }
    pos--;
  }
  return res;
};

let sortedSquare = sortedSquares([-4, -1, 0, 3, 10]);
// console.log(sortedSquare);

//

// LC 80. Remove Duplicates from Sorted Array II

var removeDuplicates = function (nums) {
  let l = 2;

  for (let r = 2; r < nums.length; r++) {
    if (nums[r] !== nums[l - 2]) {
      nums[l] = nums[r];
      l++;
    }
  }
  return l;
};

let removeDuplicateII = removeDuplicates([0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 3]);
console.log(removeDuplicateII);
