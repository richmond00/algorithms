/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return;
  }

  let res = [];
  let q = [];
  q.push(root);

  while (q.length) {
    const shifted = q.shift();
    res.push(shifted.val);

    if (shifted.left) q.push(shifted.left);
    if (shifted.right) q.push(shifted.right);
  }

  console.log("res", res);
};
