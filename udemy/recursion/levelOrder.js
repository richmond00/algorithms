/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 if (!root) {
        return [];
    }
    
    let queue = [root];
    let result = [];
    
    while (queue.length) {
        let length = queue.length;
        const values = queue.map(node => node.val);
        result.push(values);
        
        while (length--) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    
    return result;
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  console.log("root", root);
  let queue = [root];

  while (queue.length > 0) {
    console.log("queue", queue);
    const node = queue.shift();

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  console.log(res);
};
