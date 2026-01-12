// // Method #1. -- using loop
// let str = "race a car";

// let isPalindrome = function (s) {
//   s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   let i = 0;
//   let j = s.length - 1;
//   let isPalindrome = true;

//   while (i < j) {
//     if (s.charAt(i) != s.charAt(j)) {
//       isPalindrome = false;
//       break;
//     }
//     i++;
//     j--;
//   }

//   if (isPalindrome) return true;
//   else return false;
// };

// console.log(isPalindrome(str));
//
// Method #2.
// let s = "A man, a plan, a canal: Panama";

// let clean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

// let reversedString = s
//   .replace(/[^a-zA-Z0-9]/g, "")
//   .toLowerCase()
//   .split("")
//   .reverse()
//   .join("");

// if (clean === reversedString) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Method #3 using recursion ------------
// function isPalindrome(s, l = 0, r = s.length - 1) {
//   if (l >= r) return true;
//   if (s[l] != s[r]) return false;
//   return isPalindrome(s, l + 1, r - 1);
// }

// console.log(isPalindrome("sujust"));

// function isPalindromeArray(arr, l = 0, r = arr.length - 1) {
//   if (l >= r) return true;
//   if (arr[l] != arr[r]) return false;
//   return isPalindromeArray(arr, l + 1, r - 1);
// }

// console.log(isPalindromeArray([1, 2, 3, 2, 1]));
// console.log(isPalindromeArray([1, 2, 3, 4]));
