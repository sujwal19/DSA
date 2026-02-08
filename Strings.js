// ------------------------- Count vowel --------------------1
// let fullName = "SujwalDhungana";
// let vowels = "aeiou";
// let count = 0;

// Method #1
// for (let i = 0; i < fullName.length; i++) {
//   for (let j = 0; j < vowels.length; j++) {
//     if (fullName[i] == vowels[j]) {
//       count++;
//     }
//   }
// }

// Method #2
// for (let char of fullName) {
//   if (vowels.includes(char)) {
//     count++;
//   }
// }

//Method #3 - Best for Interview
// let vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

// for (let char of fullName) {
//   if (vowelSet.has(char)) count++;
// }
// console.log("There were " + count + " vowels");

//
//
// --------------------- Consonants ---------------------------- 2
// let fName = "Patrick";
// let count = 0;

// let consonants = [
//   "B",
//   "C",
//   "D",
//   "F",
//   "G",
//   "H",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "V",
//   "W",
//   "X",
//   "Z",
// ];

// for (let i = 0; i < consonants.length; i++) {
//   if (fName.toUpperCase().includes(consonants[i])) count++;
// }

// console.log("There were " + count + " consonants");

//
//
// -------------------------- Reverse String--------------------------- 3
let username = "ghostrider101";
let tempString = "";

// Method #1
// console.log(username.split("").reverse().join(""));

// Method #2
// for (let i = username.length - 1; i >= 0; i--) {
//   tempString += username[i];
// }
