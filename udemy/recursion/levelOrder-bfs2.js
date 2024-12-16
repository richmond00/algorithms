function levelOrder(root) {
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
}