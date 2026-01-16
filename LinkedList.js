function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

let first = new Node(2);
let second = new Node(30);
let third = new Node(50);
let fourth = new Node(70);

first.next = second;
second.next = third;
third.next = fourth;
let head = first;

// convert array to linked list
// let arr = [12, 4, 5, 6, 7];
// function convert(arr) {
// //   let head = new Node(arr[0]);
// //   let mover = head;

// //   for (let i = 1; i < arr.length; i++) {
// //     let temp = new Node(arr[i]);
// //     mover.next = temp;
// //     mover = temp;
// //   }
// //   return head;
// }
// let head = convert(arr);
// console.log(head);

// easy problem
// function tempList() {
//   let count = 0;
//   let temp = head;
//   while (temp !== null) {
//     count += 1;
//     console.log(temp.value);
//     temp = temp.next;
//   }
//   return count;
// }
// console.log(tempList());

// find a value in linked list
// function tempList(head, target) {
//   let temp = head;

//   while (temp !== null) {
//     if (temp.value == target) return true;
//     temp = temp.next;
//   }
//   return false;
// }
// console.log(tempList(head, 30));
