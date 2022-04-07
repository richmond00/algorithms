const solution = (s, e) => {
  let answer = 0;
  let ch = Array(10001).fill(0);
  let dis = Array(10001).fill(0);
  let queue = [];

  ch[s] = 1;
  queue.push(5);
  dis[s] = 0;
  
  while (queue.length) {
    let x = queue.shift();
    for (nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) {
        return dis[x] + 1;
      }

      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }

  return answer;
}


const result = solution(5, 14);
console.log(result);