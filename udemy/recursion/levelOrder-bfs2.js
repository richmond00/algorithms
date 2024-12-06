function levelOrder(root) {
  if (!root) return;

  let result = [];
  let queue = [];
  queue.push(root);

  while (queue.length) {
    const shifted = q.shift();
    result.push(shifted.val);

    if (shifted.left) queue.push(shifted.val);
    if (shifted.right) queue.push(shifted.val);
  }
}