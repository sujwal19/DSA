function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

let first = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);
let fifth = new Node(3);
let sixth = new Node(2);
let seventh = new Node(1);

first.next = second;
// second.next = third;
// third.next = fourth;
// fourth.next = fifth;
// fifth.next = sixth;
// sixth.next = seventh;
let head = first;

// Reversal using pointer
//
// function reverse(head) {
//   let prev = null;
//   let curr = head;

//   while (curr !== null) {
//     let next = curr.next; //save
//     curr.next = prev; // reverse
//     prev = curr; //
//     curr = next;
//   }
//   return prev;
// }
// console.log(reverse(head));
// 2, 30, 50, 70
// function reversalRecursion(head) {
//   if (head == null || head.next == null) return head;

//   let newHead = reversalRecursion(head.next);

//   let front = head.next;
//   front.next = head;
//   head.next = null;

//   return newHead;
// }

// console.log(reversalRecursion(head));

// //

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

// head = 1, 2, 2, 1

// bruteforce palindrome
// var isPalindrome = function (head) {
//   let temp = head;
//   let stack = [];

//   while (temp !== null) {
//     // console.log(temp);
//     stack.push(temp.value);
//     temp = temp.next;
//   }
//   temp = head;
//   for (let i = stack.length - 1; i >= 0; i--) {
//     if (stack[i] != temp.value) return false;
//     temp = temp.next;
//   }
//   return true;
// };

// optimal palindrome

function reversalRecursion(head) {
  if (head == null || head.next == null) return head;
  let newHead = reversalRecursion(head.next);
  let front = head.next;
  front.next = head;
  head.next = null;

  return newHead;
}

var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let newHead = reversalRecursion(slow.next);

  let first = head;
  let second = newHead;

  while (second != null) {
    if (first.value != second.value) {
      reversalRecursion(newHead);
      return false;
    }
    first = first.next;
    second = second.next;
  }
  reversalRecursion(newHead);
  return true;
};
// 33, 44, 55, 66, 77, 88, 99
console.log(isPalindrome(head));
