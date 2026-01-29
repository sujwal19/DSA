// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     if (this.isEmpty()) return null;
//     return this.items.pop();
//   }

//   top() {
//     return this.items[this.items.length - 1];
//   }

//   size() {
//     return this.items.length;
//   }

//   isEmpty() {
//     return this.items.length == 0;
//   }
// }
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(32);
// stack.push(40);
// console.log(stack.top());
// console.log(stack.size());
// console.log(stack.pop());
// console.log(stack.isEmpty());

//

// Queue

// class Queue {
//   constructor() {
//     this.items = [];
//   }
//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     if (this.isEmpty()) return null;
//     return this.items.shift();
//   }
//   front() {
//     if (this.isEmpty()) return null;
//     return this.items[0];
//   }
//   size() {
//     return this.items.length;
//   }
//   isEmpty() {
//     return this.items.length == 0;
//   }
// }
// const queue = new Queue();
// queue.push(12);
// queue.push(24);
// queue.push(36);
// queue.push(48);
// console.log(queue.pop());
// console.log(queue.front());
// console.log(queue.size());

//

// Reverse a string
// function reverseStr(s) {
//   let arrStr = s.split(" ");
//   let stack = [];

//   for (const i of arrStr) {
//     stack.push(i);
//   }

//   let finalStr = "";

//   while (stack.length) {
//     let curr = stack.pop();

//     if (curr) {
//       finalStr += curr + " ";
//     }
//   }
//   return finalStr.trim();
// }
// console.log(reverseStr("Hello World"));

//

// Valid Parentheses
let s = "([{}])";
var isValid1 = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") stack.push(")");
    else if (s[i] == "{") stack.push("}");
    else if (s[i] == "[") stack.push("]");
    else {
      if (stack.length == 0) return false;
      let top = stack[stack.length - 1];
      if (s[i] != top) return false;
      else stack.pop();
    }
  }
  return stack.length == 0;
};
// console.log(isValid1(s));

var isValid2 = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else {
      if (stack.length == 0) return false;
      let ch = stack[stack.length - 1];
      if (s[i] == ")" && ch == "(") stack.pop();
      else if (s[i] == "}" && ch == "{") stack.pop();
      else if (s[i] == "]" && ch == "[") stack.pop();
      else return false;
    }
  }
  return stack.length == 0;
};

// console.log(isValid2(s));

// var isValid = function (s) {
//   const stack = [];
//   const dic = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };

//   for (let c of s) {
//     if (!dic[c]) {
//       // opening
//       stack.push(c);
//     } else {
//       if (stack[stack.length - 1] === dic[c]) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   return !stack.length;
// };

// var isValid = function (s) {
//   // base case
//   if (s.length <= 1 || s[0] == "}" || s[0] == "]" || s[0] == ")") {
//     return false;
//   }

//   let validClose = {
//     "[": "]",
//     "{": "}",
//     "(": ")",
//   };
//   var outputArr = []; // this array will have only open brackets lie { ( [
//   outputArr.push(s[0]); // default push the first item to output array
//   for (let index = 1; index < s.length; index++) {
//     const element = s[index];
//     // if the element is a closing item and it is valid closing element.
//     // we will not add it to the output array instead we will remove last item of the array
//     if (s[index] == "}" || s[index] == "]" || s[index] == ")") {
//       if (s[index] == validClose[outputArr[outputArr.length - 1]]) {
//         outputArr.pop();
//       } else {
//         return false;
//       }
//     } else {
//       outputArr.push(s[index]);
//     }
//   }
//   return outputArr.length > 0 ? false : true;
// };
// see valid patentheses solutions ------------------------------ IMP --------------------------------------------------

//

// Greater Element I // bruteforce approach
// var nextGreaterElement = function (nums1, nums2) {
//   let ans = [];

//   for (let i = 0; i < nums1.length; i++) {
//     let found = false;
//     for (let j = 0; j < nums2.length; j++) {
//       if (nums1[i] === nums2[j]) {
//         for (let k = j + 1; k < nums2.length; k++) {
//           if (nums1[i] < nums2[k]) {
//             ans.push(nums2[k]);
//             found = true;
//             break;
//           }
//         }
//         break;
//       }
//     }
//     if (!found) ans.push(-1);
//   }
//   return ans;
// };
// console.log(nextGreaterElement(nums1, nums2));

//

// Infix to PostFix
function priority(op) {
  if (op == "+" || op == "-") return 1;
  if (op == "*" || op == "/") return 1;
  if (op == "^") return 1;
  return 0;
}

function isOperand(ch) {
  return (
    (ch >= "A" && ch <= "z") ||
    (ch >= "a" && ch <= "z") ||
    (ch >= 0 && ch <= "9")
  );
}

function convertToPostfix(exp) {
  let ans = "";
  let stack = [];

  for (let i = 0; i < exp.length; i++) {
    let ch = exp[i];

    // Operand
    if (isOperand(ch)) {
      ans = ans + ch;
    }
    // Left Parentheses
    else if (ch == "(") {
      stack.push(ch);
    }
    // Right Parentheses
    else if (ch == ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        ans = ans + stack.pop();
      }
      stack.pop();
    }
    // Operator
    else {
      while (
        stack.length &&
        priority(ch) <= priority(stack[stack.length - 1])
      ) {
        ans = ans + stack.pop();
      }
      stack.push(ch);
    }
  }
  while (stack.length) {
    ans = ans + stack.pop();
  }
  return ans;
}

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    return this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  top() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let str = "A+B*C";

function reverse(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == "(") reverseStr += ")";
    else if (str[i] == ")") {
      reverseStr += "(";
    } else {
      reverseStr += str[i];
    }
  }
  return reverseStr;
}

// console.log(str);

function convertToPostfixUsingStack(exp) {
  let ans = "";
  let stack = new Stack();

  for (let i = 0; i < exp.length; i++) {
    let ch = exp[i];

    if (isOperand(ch)) {
      ans += ch;
    }
    //
    else if (ch == "(") {
      stack.push(ch);
    }
    //
    else if (ch == ")") {
      while (!stack.isEmpty() && stack.top() != "(") {
        ans += stack.pop();
      }
      stack.pop();
    }
    //
    else {
      while (!stack.isEmpty() && priority(ch) <= priority(stack.top())) {
        ans += stack.pop();
      }
      stack.push(ch);
    }
  }
  while (!stack.isEmpty()) {
    ans = ans + stack.pop();
  }
  return ans;
}

//

function convertToPrefix(exp) {
  let result = "";
  let stack = [];

  for (let i = exp.length - 1; i >= 0; i--) {
    let ch = exp[i];
    if (isOperand(ch)) {
      result = ch + result;
    }
    //
    else if (ch == ")") {
      stack.push(ch);
    }
    //
    else if (ch == "(") {
      while (stack.length && stack[stack.length - 1] != ")") {
        result = stack.pop() + result;
      }
      stack.pop();
    }
    //
    else {
      while (
        stack.length &&
        (priority(ch) < priority(stack[stack.length - 1]) ||
          (priority(ch) === priority(stack[stack.length - 1]) && ch !== "^"))
      ) {
        result = stack.pop() + result;
      }
      stack.push(ch);
    }
  }
  while (stack.length) {
    result = stack.pop() + result;
  }
  return result;
}

console.log(convertToPrefix("(A+B)*C"));
