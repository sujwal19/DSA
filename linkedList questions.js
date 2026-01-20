function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

let first = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);
let fifth = new Node(5);
// let sixth = new Node(6);
// let seventh = new Node(6);
first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
// fifth.next = sixth;
// sixth.next = seventh;
let head1 = first;

// let one = new Node(5);
// let two = new Node(6);
// let three = new Node(4);

// one.next = two;
// two.next = three;
// let head2 = one;

// 1, 2, 3, 4, 5 => 1,3,5,2,4
// bruteforce #1
// function oddEvenList(head) {
//   if (head == null || head.next == null) return head;

//   let arr = [];
//   let temp = head;

//   while (temp != null && temp.next != null) {
//     arr.push(temp.value);
//     temp = temp.next.next;
//   }
//   if (temp) arr.push(temp.value);

//   temp = head.next;
//   while (temp != null && temp.next != null) {
//     arr.push(temp.value);
//     temp = temp.next.next;
//   }
//   if (temp) arr.push(temp.value);

//   temp = head;
//   let i = 0;
//   while (temp != null) {
//     temp.value = arr[i++];
//     temp = temp.next;
//   }
//   return head;
// }
// console.log(oddEvenList(head1));

// bruteforce #2
// function oddEvenList(head) {
//   let odd = head;
//   let even = head.next;
//   let evenHead = even;

//   // 1, 2, 3, 4, 5 => 1, 3, 5, 2, 4
//   while (even != null && even.next != null) {
//     odd.next = even.next;
//     odd = odd.next;

//     even.next = odd.next;
//     even = even.next;
//   }
//   odd.next = evenHead;
//   return head;
// }

// console.log(oddEvenList(head1));

// Sort a Linked list of 0s, 1s and 2s -- bruteforce
// function check012(head) {
//   let temp = head;
//   let count0 = 0;
//   let count1 = 0;
//   let count2 = 0;

//   while (temp != null) {
//     if (temp.value == 0) count0 += 1;
//     else if (temp.value == 1) count1 += 1;
//     else count2 += 1;
//     temp = temp.next;
//   }
//   temp = head;
//   while (temp != null) {
//     if (count0) {
//       temp.value = 0;
//       count0--;
//     } else if (count1) {
//       temp.value = 1;
//       count1--;
//     } else {
//       temp.value = 2;
//       count1--;
//     }
//     temp = temp.next;
//   }
//   return head;
// }
// console.log(check012(head1));

// Sort a linked list -- optimal method
// function check012(head) {
//   if (head == null || head.next == null) return head;
//   let zero = new Node(-1);
//   let one = new Node(-1);
//   let two = new Node(-1);
//   let zeroHead = zero;
//   let oneHead = one;
//   let twoHead = two;
//   let temp = head;

//   while (temp != null) {
//     if (temp.value == 0) {
//       zero.next = temp;
//       zero = temp;
//     } else if (temp.value == 1) {
//       one.next = temp;
//       one = temp;
//     } else {
//       two.next = temp;
//       two = temp;
//     }
//     temp = temp.next;
//   }
//   zero.next = oneHead.next ? oneHead.next : twoHead.next;
//   one.next = twoHead.next ? twoHead.next : null;
//   two.next = null;
//   let newHead = zeroHead.next;
//   return newHead;
// }
// console.log(check012(head1));

//

// ---------------  Linked List Cycle

// function linkedCycle(head) {
//   if (head == null || head.next == null) return false;

//   let slow = head;
//   let fast = head;

//   while (fast != null && fast.next != null) {
//     slow = slow.next;
//     fast = fast.next.next;

//     if (slow === fast) return true;
//   }
//   return false;
// }
// console.log(linkedCycle(head1));

//

// --------- Remove Linked List Elements
// ([1, 2, 6, 3, 4, 5, 6], (val = 6));

// function removeElem(head, val) {
//   let dummy = new Node(-1);
//   dummy.next = head;
//   let curr = head;
//   let prev = dummy;

//   while (curr != null) {
//     if (curr.value == val) {
//       prev.next = curr.next;
//       curr = curr.next;
//     } else {
//       prev = curr;
//       curr = curr.next;
//     }
//   }
//   return dummy.next;
// }
// console.dir(removeElem(head1, 7), { depth: null });

// 1, 2, 3, 4, 5, 6
// Remove middle of linked list
// var middleNode = function (head) {
//   let slow = head;
//   let fast = head;

//   while (fast != null && fast.next != null) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return slow;
// };

// console.log(middleNode(head1));

//

// convert binary number in ll in integer
// Input: head = [1, 0, 1];

var getDecimalValue = function (head) {
  let arr = [];
  let temp = head;

  while (temp != null) {
    arr.push(temp.val);
    temp = temp.next;
  }
  let convertedInt = arr.split("");
};
