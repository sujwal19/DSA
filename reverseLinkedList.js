function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

let first = new Node(2);
let second = new Node(30);
let third = new Node(50);
let fourth = new Node(70);
let fifth = new Node(80);
let sixth = new Node(90);

first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;
let head = first;

// Reversal using pointer
//
// function reversal(head) {
//   let prev = null;
//   let curr = head;

//   while (curr !== null) {
//     let next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }
//   return prev;
// }

// console.log(reversal(head));

//
function recursiveReversal(head) {
  if (head == null || head.next == null) return head;
  let newHead = recursiveReversal(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

console.log(recursiveReversal(head));
//

//

//

// Reversal using bruteforce. #2 ---------------- not optimal
// function rev(head) {
//   let temp = head;
//   let stack = [];
//   while (temp != null) {
//     stack.push(temp.value);
//     temp = temp.next;
//   }
//   temp = head;
//   while (temp != null) {
//     temp.value = stack.pop();
//     temp = temp.next;
//   }
//   return head;
// }
// console.log(rev(head));

// Reversal using pointer
