const solution = (num) => {
  const recursive = (l) => {
    if (l === 0) {
      return;
    } else {
      recursive(l - 1);
      console.log(l);
    }

  }

  recursive(num);
}
    
solution(3);
