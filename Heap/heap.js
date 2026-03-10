class maxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIdx = this.getParentIndex(index);
      // Max-Heap logic: child > parent
      if (this.heap[index] > this.heap[parentIdx]) {
        [this.heap[index], this.heap[parentIdx]] = [
          this.heap[parentIdx],
          this.heap[index],
        ];
        index = parentIdx;
      } else {
        break;
      }
    }
  }

  peek() {
    return this.heap[0];
  }

  delete() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    const size = this.heap.length;

    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let largest = index;

      if (left < size && this.heap[left] > this.heap[largest]) {
        largest = left;
      }

      if (right < size && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      index = largest;
    }
  }
}

let arr = [7, 10, 4, 20, 15];
let k = 4;

var findKthSmallest = function (nums, k) {
  let heap = new maxHeap();

  for (let i = 0; i < k; i++) {
    heap.insert(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] < heap.peek()) {
      heap.delete();
      heap.insert(nums[i]);
    }
  }

  let ans = heap.peek();
  return ans;
};

console.log(findKthSmallest(arr, k));

// is Binary Tree Heap

function isCBT(root, i, nodeCount) {
  if (root == null) return true;

  if (i > nodeCount) return false;
  else {
    let left = isCBT(root.left, 2 * i + 1, nodeCount);
    let right = isCBT(root.right, 2 * i + 2, nodeCount);
    return left && right;
  }
}

function isMaxOrder() {}

function checkHeap(root) {
  if (isCBT(root, i, nodeCount) && isMaxOrder()) {
    return true;
  } else return false;
}
