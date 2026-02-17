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

function preorderTraversal(node) {
  if (!node) return;
  process.stdout.write(node.value + " ");
  preorderTraversal(node.left);
  preorderTraversal(node.right);
}

// For Inorder Traversal ------------------
// function inorderTraversal(node) {
//   if (!node) return;
//   inorderTraversal(node.left);
//   process.stdout.write(node.value + " ");
//   inorderTraversal(node.right);
// }

// For postorder Traversal -----------------
// function postorderTraversal(node) {
//   if (!node) return;
//   postorderTraversal(node.left);
//   postorderTraversal(node.right);
//   process.stdout.write(node.value + " ");
// }

const arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];
const root = buildTree(arr);

console.log("Preorder Traversal");
preorderTraversal(root);
