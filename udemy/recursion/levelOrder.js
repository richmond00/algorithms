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
// var levelOrder = function (root) {
//   let res = [];
//   let queue = [root];

//   while (queue.length) {
//     console.log("queue", queue, queue.length);
//     const currentNode = queue.shift();
//     res.push(currentNode.val);

//     if (currentNode.left) queue.push(currentNode.left);
//     if (currentNode.right) queue.push(currentNode.right);
//   }
//   console.log("res", res);

//   return res;
// };
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
  if (!root) return [];

  let res = [];
  let queue = [root];

  while (queue.length) {
    let length = queue.length;
    let count = 0;
    const currentLevelValues = [];

    while (count < length) {
      const currentNode = queue.shift();
      currentLevelValues.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);

      count++;
    }

    res.push(currentLevelValues);
  }

  return res;
};
