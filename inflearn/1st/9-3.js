const solution = (board) => {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  const dfs = (x, y) => {
    if (x === 6 && y === 6) {
      answer++;
    } else {
      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        const isInside = nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6;
        
        if (isInside && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          dfs(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  dfs(0, 0);
  return answer;
}


const board=[
  [0, 0, 0, 0, 0, 0, 0], 
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0]
];
const result = solution(board);
console.log(result);