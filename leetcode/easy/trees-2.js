/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function helper(node, min, max) {
  if (node === null) {
    return true;
  }
  const val = node.val;
  
  if (min !== null && val <= min) { // right
      return false;
  }
  if (max !== null && val >= max) { // left
      return false;
  }
  
  return helper(node.right, val, max) && helper(node.left, min, val);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return helper(root, null, null);
};
