var maxDepth = function (root, depth = 0) {
  if (!root) {
    return depth;
  }

  depth++;

  return Math.max(maxDepth(root.left, depth), maxDepth(root.right, depth));
};
/*
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
*/
