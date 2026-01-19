function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

let first = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);
let fifth = new Node(5);
first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
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
function oddEvenList(head) {
  let odd = head;
  let even = head.next;
  let evenHead = even;

  // 1, 2, 3, 4, 5 => 1, 3, 5, 2, 4
  while (even != null && even.next != null) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}

console.log(oddEvenList(head1));
