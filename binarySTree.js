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

// inorderTraversalBST(root);

//
function searchBST(root, val) {
  if (!root) return;

  if (root.val == val) return true;
  //
  else if (val < root.val) {
    return searchBST(root.left, val);
    //
  } else if (val > root.val) {
    return searchBST(root.right, val);
  }
}

function searchBSTItervative(root, val) {
  let node = root;
  if (root === null) return false;

  while (node !== null) {
    if (node.val === val) return true;
    else if (val < node.val) node = node.left;
    else node = node.right;
  }
  return false;
}

function getInorderSuccessor(root) {
  while (root !== null && root.left !== null) {
    root = root.left;
  }
  return root;
}

function deleteTreeNode(root, key) {
  if (root === null) return null;

  if (key < root.val) {
    root.left = deleteTreeNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteTreeNode(root.right, key);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }
    let is = getInorderSuccessor(root.right);
    root.val = is.val;
    root.right = deleteTreeNode(root.right, is.val);
  }
  return root;
}
// inorderTraversalBST(root);
// console.log();
// inorderTraversalBST(deleteTreeNode(root, 4));

//

//
function preInPostTraversal(root) {
  let st = [];
  st.push(root, 1);
  let pre = [];
  let ino = [];
  let post = [];

  if (root === null) return;

  while (st.length) {
    let it = st.pop();

    if (it.num === 1) {
      pre.push(it.node.val);
      it.num++;
      st.push(it);
      if (it.node.left != null) {
        st.push(it.node.left, 1);
      }
    }
    //
    else if (it.num === 2) {
      ino.push(it.node.val);
      it.num++;
      st.push(it);
      if (it.node.right !== null) {
        st.push(it.node.right, 1);
      }
    }
    //
    else {
      post.push(it.node.val);
    }
  }
}

console.log(preInPostTraversal(root));
