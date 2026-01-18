// intersection of Linked List
function Node(value, next = null) {
  this.value = value;
  this.next = next;
}
// Shared part
let common1 = new Node(4);
let common2 = new Node(6);
let common3 = new Node(2);

common1.next = common2;
common2.next = common3;

// List 1
let first = new Node(3);
let second = new Node(1);
first.next = second;
second.next = common1;
let head1 = first;

// List 2
let one = new Node(1);
let two = new Node(2);
one.next = two;
two.next = common1;
let head2 = one;

// brute force #1
// function intersection(head1, head2) {
//   const mpp = new Map();
//   let temp = head1;

//   while (temp != null) {
//     mpp.set(temp, true);
//     temp = temp.next;
//   }

//   temp = head2;

//   while (temp != null) {
//     if (mpp.has(temp)) {
//       return temp;
//     }
//     temp = temp.next;
//   }
//   return null;
// }
// console.log(intersection(head1, head2).value);

//

// bruteforce #2
// function intersectPoint(t1, t2, d) {
//   while (d) {
//     d--;
//     t2 = t2.next;
//   }

//   while (t1 != t2) {
//     t1 = t1.next;
//     t2 = t2.next;
//   }
//   return t1;
// }
// function intersection(head1, head2) {
//   let t1 = head1,
//     n1 = 0;
//   let t2 = head2,
//     n2 = 0;

//   while (t1 != null) {
//     n1++;
//     t1 = t1.next;
//   }

//   while (t2 != null) {
//     n2++;
//     t2 = t2.next;
//   }

//   if (n1 < n2) {
//     return intersectPoint(head1, head2, n2 - n1);
//   } else {
//     return intersectPoint(head2, head1, n1 - n2);
//   }
// }
// console.log(intersection(head1, head2));

//
//

// Optimal Method --------------------------------------------------------
function intersection(head1, head2) {
  if (head1 == null || head2 == null) return null;
  let t1 = head1;
  t2 = head2;

  while (t1 != t2) {
    t1 = t1.next;
    t2 = t2.next;

    if (t1 == null) t1 = head2;
    if (t2 == null) t2 = head1;
  }
  return t1;
}

console.log(intersection(head1, head2));
