class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
//
function insertBST(root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) root.left = insertBST(root.left, val);
  else root.right = insertBST(root.right, val);
  return root;
}
//
let arr = [3, 2, 1, 5, 6, 4];
let root = null;

for (let v of arr) {
  root = insertBST(root, v);
}

//
function inorderTraversalBST(root) {
  if (root === null) return;

  inorderTraversalBST(root.left);
  process.stdout.write(root.val + " ");
  inorderTraversalBST(root.right);
}

inorderTraversalBST(root);

//
function searchBST(root, val) {
  if (!root) return;

  if (root.val == val) return true;
  //
  else if (root.val < val) {
    searchBST(root.left, val);
    //
  } else if (root.val > val) {
    searchBST(root.right, val);
  }
}
