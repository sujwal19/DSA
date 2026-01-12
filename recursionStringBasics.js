// // reverse a string
// function revPrintStr(s, i = 0) {
//   if (i == s.length) return;
//   revPrintStr(s, i + 1);
//   console.log(s[i]);
// }

// revPrintStr("sujwal");

//

// // remove a char
// function removeChar(s, ch, i = 0) {
//   if (i == s.length) return "";
//   let rest = removeChar(s, ch, i + 1);
//   if (s[i] == ch) return rest;
//   return s[i] + rest;
// }
// console.log(removeChar("sujwal", "u"));

//

// // count a char
// function countChar(s, ch, i = 0) {
//   if (i == s.length) return 0;
//   return (s[i] == ch ? 1 : 0) + countChar(s, ch, i + 1);
// }
// console.log(countChar("sujuwal", "u"));

//

// // count vowels
// function countVowels(s, ch = "aeiou", i = 0) {
//   if (i == s.length) return 0;
//   return (ch.includes(s[i]) ? 1 : 0) + countVowels(s, ch, i + 1);
// }
// console.log(countVowels("recursion"));
// console.log(countVowels("bcdf"));

//

// // reverse a string
// function revStr(s, i = 0) {
//   if (i == s.length) return "";
//   return revStr(s, i + 1) + s[i];
// }
// console.log(revStr("hello"));

//

// check palindrome string
// function isPalindrome(s, l = 0, r = null) {
//   if (r == null) {
//     s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//     r = s.length - 1;
//   }

//   if (l >= r) return true;

//   if (s[l] != s[r]) return false;
//   return isPalindrome(s, l + 1, r - 1);
// }
// console.log(isPalindrome("race a car"));

//

// remove a char from a string
// function removeA(s, ch = "a", i = 0) {
//   if (i === s.length) return "";

//   let rest = removeA(s, ch, i + 1);
//   if (s[i] == ch) return rest;
//   return s[i] + rest;
// }
// console.log(removeA("bananas"));

//

// //1st method
// function capitalize(s, i = 0) {
//   if (i == s.length) return "";
//   if (i == 0) {
//     process.stdout.write(s[i].toUpperCase());
//   } else {
//     process.stdout.write(s[i]);
//   }
//   capitalize(s, i + 1);
// }
// capitalize("sujwal");

//

// // 2nd method
// function capitalize2(s, i = 0) {
//   if (i == s.length) return "";
//   return (i == 0 ? s[i].toUpperCase() : s[i]) + capitalize2(s, i + 1);
// }
// console.log(capitalize2("sujwal"));

//

// fibonacci number
// function fibNTerm(n) {
//   if (n === 0 || n == 1) return n;
//   return fibNTerm(n - 1) + fibNTerm(n - 2);
// }

// console.log(fibNTerm(5));

// climbing stairs
function climb(n) {
  if (n === 1) return 1;
  if (n < 0) return 0;
  return climb(n - 1) + climb(n - 2);
}
console.log(climb(5));

// Binary strings
