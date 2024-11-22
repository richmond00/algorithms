function maxDepth(root, depth = 0) {
  if (!root) {
    return depth;
  }
  depth++;

  return Math.max(maxDepth(root.left, depth), maxDepth(root.right, depth));
}