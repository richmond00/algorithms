var maxDepth = function (root, depth = 0) {
  console.log("root", root);
  if (!root) {
    return depth;
  }
  depth++;

  return Math.max(maxDepth(root.left, depth), maxDepth(root.right, depth));
};
