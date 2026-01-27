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
let s = "()[]{}";
var isValid = function (s) {};

console.log(isValid(s));
