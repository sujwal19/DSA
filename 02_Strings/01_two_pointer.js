//

// 28. Find the Index of the First Occurrence in a String
// Brute Force
var strStr = function (haystack, needle) {
  for (let j = 0; j <= haystack.length - needle.length; j++) {
    let found = true;

    for (let i = 0; i < needle.length; i++) {
      if (haystack[j + i] !== needle[i]) {
        found = false;
        break;
      }
    }
    if (found) return j;
  }
  return -1;
};
// console.log(strStr("leetcode", "leetc"));

//
