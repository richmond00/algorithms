/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  let answer = 0;
  const dfs = (node, counter) => {
      if (!node) {
          answer = Math.max(answer, counter);
          return;
      } else {
          dfs(node.left, counter + 1);
          dfs(node.right, counter + 1);
      }
  }
  
  dfs(root, 0);
  
  return answer;
};