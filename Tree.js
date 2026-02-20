//  Most asked questions in interview
// Invert Binary Tree
// Maximum Depth
// Validate BST
// Level Order Traversal
// Lowest Common Ancestor
// Diameter of Binary Tree
// Serialize & Deserialize
// Kth smallest in BST
// Path Sum
// Balanced Binary Tree

//

// Preorder Traversal
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function buildTree(arr) {
  let idx = 0;

  function helper() {
    if (idx >= arr.length || arr[idx] === -1) {
      idx++;
      return null;
    }
    const newNode = new TreeNode(arr[idx]);
    idx++;
    newNode.left = helper();
    newNode.right = helper();

    return newNode;
  }
  return helper();
}
///////////////////////////////////

// function levelorderTraversal(root) {
//   if (!root) return;
//   const queue = [root];
//   let i = 0;
//   while (i < queue.length) {
//     let size = queue.length - i;
//     while (size--) {
//       const node = queue[i++];
//       process.stdout.write(node.value + " ");
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     console.log();
//   }
// }

// function levelorderTraversal(root) {
//   if (!root) return;
//   const queue = [];
//   queue.push(root);
//   queue.push(null);

//   while (queue.length) {
//     const curr = queue.shift();

//     if (curr === null) {
//       console.log();
//       if (queue.length === 0) break;
//       queue.push(null);
//     } else {
//       process.stdout.write(curr.value + " ");
//       if (curr.left) queue.push(curr.left);
//       if (curr.right) queue.push(curr.right);
//     }
//   }
// }

const arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];
const root = buildTree(arr);

// console.log("Preorder Traversal");
// preorderTraversal(root);

// console.log("Levelorder Traversal");
// levelorderTraversal(root);

//

//  Count Nodes -----------------
// (DFS) recursion
// function countNodes(root) {
//   if (root === null) return 0;
//   let leftNode = countNodes(root.left);
//   let rightNode = countNodes(root.right);

//   return leftNode + rightNode + 1;
// }
// (BFS) queue
// function countNodes(root) {
//   if (!root) return 0;
//   const queue = [root];
//   let count = 0;
//   while (queue.length) {
//     const node = queue.shift();
//     count++;
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }
//   return count;
// }
// let countOfNodes = countNodes(root);
// console.log(countOfNodes);

//

// Sum of Nodes
// function sumNodes(root) {
//   if (root === null) return 0;
//   let leftSum = sumNodes(root.left);
//   let rightSum = sumNodes(root.right);
//   return leftSum + rightSum + root.value;
// }
// let sumOfNodes = sumNodes(root);
// console.log(sumOfNodes);

//

//
function treeHeight(root) {
  if (root === null) return 0;

  let leftHeigth = treeHeight(root.left);
  let rightHeight = treeHeight(root.right);

  let myHeight = Math.max(leftHeigth, rightHeight) + 1;
  return myHeight;
}

// O(n^2) Approach
function diameter(root) {
  if (!root) return 0;
  let diam1 = diameter(root.left);
  let diam2 = diameter(root.right);
  let diam3 = treeHeight(root.left) + treeHeight(root.right) + 1;
  return Math.max(diam3, Math.max(diam1, diam2));
}

// O(n) Approach
function diameter2(root) {
  let diam = 0;

  function dfs(node) {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    // update diameter
    diam = Math.max(diam, left + right);
    // return height
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return diam;
}

let heightOfTree = treeHeight(root);
// console.log(heightOfTree);

// let diameterOfTree = diameter(root);
// console.log(diameterOfTree);

// let diameterOfTree2 = diameter2(root);
// console.log(diameterOfTree2);

//

function isIdentical(root, subRoot) {
  if (root == null && subRoot == null) return true;
  if (root == null || subRoot == null) return false;

  if (root.value === subRoot.value) {
    return (
      isIdentical(root.left, subRoot.left) &&
      isIdentical(root.right, subRoot.right)
    );
  }
  return false;
}

var isSubtree = function (root, subRoot) {
  if (subRoot === null) return true;
  if (root === null) return false;

  if (isIdentical(root, subRoot)) {
    return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

let subTreeCheck = isSubtree([3, 4, 5, 1, 2], [4, 1, 2]);
// console.log(subTreeCheck);

//
// Preoder Traversal -------------------------------------
// Recursive way.....
// function preorderTraversal(node) {
//   if (!node) return;
//   process.stdout.write(node.value + " ");
//   preorderTraversal(node.left);
//   preorderTraversal(node.right);
// }

// Iterative way.....
function preorderTraversalIterative(root) {
  let preorder = [];
  if (root === null) return [];

  let stack = [];
  stack.push(root);

  while (stack.length > 0) {
    let node = stack.pop();
    preorder.push(node.value);

    // first right and then left
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return preorder;
}

let result3 = preorderTraversalIterative(root);
// console.log(result3);

//

// Inorder Traversal -------------------------------------
// Recursive way.....
function inorderTraversal(node) {
  if (!node) return;
  inorderTraversal(node.left);
  process.stdout.write(node.value + " ");
  inorderTraversal(node.right);
}
// Iterative way.....
function inorderTraversalIterative(root) {
  if (root === null) return [];
  let stack = [];
  let inorder = [];
  let node = root;

  while (true) {
    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      if (stack.length <= 0) break;
      node = stack.pop();
      inorder.push(node.value);
      node = node.right;
    }
  }
  return inorder;
}

let result4 = inorderTraversalIterative(root);
// console.log(result4);

// Postorder Traversal -------------------------------------
// Recursive way.....
// function postorderTraversal(node) {
//   if (!node) return;
//   postorderTraversal(node.left);
//   postorderTraversal(node.right);
//   process.stdout.write(node.value + " ");
// }
// Iterative way.....
function postorderTraversalIterative(root) {
  let st1 = [];
  let st2 = [];
  let postorder = [];

  if (root === null) return postorder;

  st1.push(root);

  while (st1.length) {
    root = st1.pop();
    st2.push(root);

    if (root.left) st1.push(root.left);
    if (root.right) st1.push(root.right);
  }

  while (st2.length) {
    postorder.push(st2.pop().value);
  }
  return postorder;
}

let result5 = postorderTraversalIterative(root);
console.log(result5);

//

// let p = [1, 2, 3];
// let q = [1, 2, 3];
// var isSameTree = function (p, q) {
//   if (p === null && q === null) return true;
//   if (p === null || q === null) return false;

//   if (p.val !== q.val) return false;
//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// }
// console.log(isSameTree(p, q));
