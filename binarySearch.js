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

// Square Root
let mySqrt = function (x) {
  let low = 0;
  let high = Math.floor(x / 2);
  let ans = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (mid <= x / mid) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
};

// console.log(mySqrt(8));

//

// Intersection of two arrays using Sets
var intersection = function (nums1, nums2) {
  let set = new Set(nums1);
  let result = new Set();

  for (let num of nums2) {
    if (set.has(num)) {
      result.add(num);
    }
  }
  return [...result];
};
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

// Using Binary Search
var intersectionUsingBS = function (nums1, nums2) {
  let sortedArray =
    nums1.length > nums2.length
      ? nums1.sort((a, b) => a - b)
      : nums2.sort((a, b) => a - b);

  let iterateArray = nums1.length > nums2.length ? nums2 : nums1;

  let result = new Set();
  for (let i = 0; i < iterateArray.length; i++) {
    let target = iterateArray[i];
    let low = 0;
    let high = sortedArray.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (target === sortedArray[mid]) {
        result.add(target);
        break;
      } else if (target > sortedArray[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return [...result];
};
// console.log(intersectionUsingBS([1, 2, 2, 1], [2, 2]));

//

//
var intersect = function (nums1, nums2) {
  let freqMap = new Map();
  let result = [];

  let [smaller, larger] =
    nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];

  for (let num of smaller) {
    if (freqMap.has(num)) {
      freqMap.set(num, freqMap.get(num) + 1);
    } else {
      freqMap.set(num, 1);
    }
  }

  for (let num of larger) {
    if (freqMap.has(num) && freqMap.get(num) > 0) {
      result.push(num);
      freqMap.set(num, freqMap.get(num) - 1);
    }
  }
  return result;
};
// console.log(intersect([1, 2, 2, 1], [2, 2]));

//

//
var intersectUsing2P = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let result = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else j++;
  }
  return result;
};

// console.log(intersectUsing2P([1, 2, 2, 1], [2, 2]));

//

//
let letters = ["c", "f", "j"];
let target = "a";
var nextGreatestLetter = function (letters, target) {
  let ans = letters[0];
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (letters[mid] > target) {
      ans = letters[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};
// console.log(nextGreatestLetter(letters, target));

//

//
let aliceSizes = [1, 2, 5, 9];
let bobSizes = [3, 4, 6, 8];
var fairCandySwap = function (aliceSizes, bobSizes) {
  let sumA = aliceSizes.reduce((acc, val) => acc + val, 0);
  let sumB = bobSizes.reduce((acc, val) => acc + val, 0);
  let result = new Array(2);
  let diff = (sumA - sumB) / 2;

  if ((sumA - sumB) % 2 !== 0) return result;

  for (let i = 0; i < aliceSizes.length; i++) {
    for (let j = 0; j < bobSizes.length; j++) {
      // if (
      //   sumA - aliceSizes[i] + bobSizes[j] ==
      //   sumB + aliceSizes[i] - bobSizes[j]
      // )
      if (aliceSizes[i] === bobSizes[j] + diff) {
        result[0] = aliceSizes[i];
        result[1] = bobSizes[j];
        return result;
      }
    }
  }
  return result;
};

// console.log(fairCandySwap(aliceSizes, bobSizes));

//
var fairCandySwapUsingSets = function (aliceSizes, bobSizes) {
  let sumA = aliceSizes.reduce((acc, val) => acc + val, 0);
  let sumB = bobSizes.reduce((acc, val) => acc + val, 0);
  let diff = (sumA - sumB) / 2;

  if ((sumA - sumB) % 2 !== 0) return [];

  let aliceSet = new Set(aliceSizes);

  // Loop through bob once
  for (let b of bobSizes) {
    let needed = b + diff;
    // Lookup
    if (aliceSet.has(needed)) {
      return [needed, b];
    }
  }
  return [];
};

// console.log(fairCandySwapUsingSets(aliceSizes, bobSizes));

//

//
var isPerfectSquare = function (num) {
  if (num < 2) return true;

  let left = 1;
  // let right = num;
  let right = Math.floor(num / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === num) {
      return true;
    } else if (square > num) {
      right = mid - 1;
    } else left = mid + 1;
  }
  return false;
};

// console.log(isPerfectSquare(25));

//

//
var arrangeCoins = function (n) {
  let coinsLeft = n;
  let row = 0;
  while (coinsLeft >= row) {
    coinsLeft -= row;
    row++;
  }
  return row - 1;
};
// console.log(arrangeCoins(5));

var arrangeCoinsUsingBS = function (n) {
  let left = 0;
  let right = n;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let coinsNeeded = (mid * (mid + 1)) / 2;

    if (coinsNeeded === n) {
      return mid;
    } else if (coinsNeeded > n) {
      right = mid - 1;
    } else left = mid + 1;
  }
  return right;
};
// console.log(arrangeCoinsUsingBS(5));

//
let arr1 = [4, 5, 8];
let arr2 = [10, 9, 1, 8];
let d = 2;
var findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    let isSafe = true;

    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        isSafe = false;
        break;
      }
    }
    if (isSafe) count++;
  }
  return count;
};
// console.log(findTheDistanceValue(arr1, arr2, d));

var findTheDistanceValueUsingBS = function (arr1, arr2, d) {
  let count = 0;
  let sortedArr = arr2.sort((a, b) => a - b);

  for (let i = 0; i < arr1.length; i++) {
    let target = arr1[i];
    let valid = true;
    let low = target - d;
    let high = target + d;
    let left = 0;
    let right = sortedArr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (sortedArr[mid] < low) {
        left = mid + 1;
      } else if (sortedArr[mid] > high) {
        right = mid - 1;
      } else {
        valid = false;
        break;
      }
    }
    if (valid) count++;
  }
  return count;
};

// console.log(findTheDistanceValueUsingBS(arr1, arr2, d));

//

//
let arr = [2, 3, 4, 7, 11];
let k = 5;
var findKthPositive = function (arr, k) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let missing_before = arr[i] - (i + 1);
    if (missing_before >= k) {
      return k + i;
    }
  }
  return k + n;
};
// console.log(findKthPositive(arr, k));

var findKthPositiveUsingBS = function (arr, k) {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    let missingCount = arr[mid] - (mid + 1);
    if (missingCount >= k) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return k + lo;
};

// console.log(findKthPositiveUsingBS(arr, k));

//

//
var targetIndices = function (nums, target) {
  let sortedNums = nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (sortedNums[i] === target) {
      result.push(i);
    }
  }
  return result;
};
// console.log(targetIndices([1, 2, 5, 2, 3], 2));

var targetIndicesWithoutSort = function (nums, target) {
  let smaller = 0;
  let equal = 0;

  for (let num of nums) {
    if (num < target) smaller++;
    if (num === target) equal++;
  }

  let result = [];

  for (let i = 0; i < equal; i++) {
    result.push(smaller + i);
  }
  return result;
};

// console.log(targetIndicesWithoutSort([1, 2, 5, 2, 3], 2));

//

//
let nums = [4, 5, 2, 1];
let queries = [3, 10, 21];
var answerQueries = function (nums, queries) {
  let sorted = nums.sort((a, b) => a - b);

  let prefix = [];
  prefix[0] = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    prefix[i] = prefix[i - 1] + sorted[i];
  }

  let result = [];

  for (let q of queries) {
    let low = 0;
    let high = prefix.length - 1;
    let lastValid = -1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (prefix[mid] <= q) {
        lastValid = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    result.push(lastValid + 1);
  }
  return result;
};
// TC = O(n log n + n + N log n) → O((n + N) log n) ✅
// Total SC = O(n + N) ✅

// note for this
// function note(){
//   Perfect! Let’s organize this neatly so you can **take notes that actually help you remember the pattern**. I’ll break it down step by step.

// ---

// ## **Problem Note Template**

// **1️⃣ Problem Type / Category:**

// * **Type:** Greedy + Prefix Sum + Binary Search
// * **Category:** “Maximize number of elements under sum constraint”

// **2️⃣ Core Trick / Insight:**

// * Sort the array ascending → always pick **smallest numbers first**.
// * Build **prefix sums** → cumulative totals let you check “how many numbers can fit” efficiently.
// * Use **binary search** on prefix → find the **rightmost index** ≤ query → gives max count.

// **3️⃣ Why it works:**

// * Sorting ensures smallest numbers are considered first → maximizes count.
// * Prefix sums allow **fast cumulative sum checks** instead of summing repeatedly.
// * Binary search reduces query time from O(n) → O(log n).

// **4️⃣ What should trigger this pattern in the future:**

// * The problem asks for: **“maximum number of elements under sum constraint”**
// * Order of elements **does not matter**
// * Multiple queries for different sums → need efficiency
// * If you see: “maximize count with sum ≤ limit” → **think: sort → prefix → binary search**

// **5️⃣ Common Mistakes / Pitfalls:**

// * Trying to use sliding window → wrong if elements don’t need to be contiguous.
// * Forgetting prefix sums → summing raw numbers leads to wrong answers.
// * Counting individual numbers ≤ query instead of checking cumulative sum.
// * Incrementing a counter inside binary search → wrong; should rely on the **last valid index**.
// * Using `prefix[i + 1]` in a forward loop → undefined / NaN.

// **6️⃣ Quick Reference / Formula:**

// * Build prefix:

// ```js
// prefix[0] = sorted[0];
// prefix[i] = prefix[i-1] + sorted[i];
// ```

// * Binary search for query `q`:

// ```js
// let low = 0, high = prefix.length - 1, lastValid = -1;
// while (low <= high) {
//     let mid = Math.floor((low+high)/2);
//     if (prefix[mid] <= q) { lastValid = mid; low = mid+1; }
//     else { high = mid-1; }
// }
// count = lastValid + 1;
// ```
// * Result = `count`
// --
// 💡 **Memory trigger:**
// When you see:

// > “Max elements under a sum / limit”
// > “Order does NOT matter”
// > → Automatically think: **sort → prefix → binary search**

// ---
// If you want, I can also make a **tiny visual diagram** for your notes showing:
// * Sorted array → prefix sums → how binary search finds last valid index → count
// It will make your note **instantly memorable**.
// Do you want me to make that diagram?

// }
// console.log(answerQueries(nums, queries));

//

//

var maximumCount = function (nums) {
  let pos = 0;
  let neg = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  console.log(left);
};

console.log(maximumCount([0, 0]));
