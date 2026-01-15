function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

let first = new Node(30);
let second = new Node(50);
let third = new Node(70);

first.next = second;
second.next = third;
let head = first;

// easy problem
function tempList() {
  let count = 0;
  let temp = head;
  while (temp !== null) {
    count += 1;
    console.log(temp.value);
    temp = temp.next;
  }
  return count;
}
console.log(tempList());

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
