const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim());

let min = Infinity;
function dfs(n, cnt) {
  if (n === 1) {
    min > cnt ? (min = cnt) : null;
    return;
  }
  if (n < 1) return;
  if (n % 3 === 0) {
    n = Math.floor(n / 3);
    cnt++;
    dfs(n, cnt);
    cnt--;
    n = Math.floor(n * 3);
  }
  if (n % 2 === 0) {
    n = Math.floor(n / 2);
    cnt++;
    dfs(n, cnt);
    cnt--;
    n = Math.floor(n * 2);
  }
  n -= 1;
  cnt++;
  dfs(n, cnt);
  cnt--;
  n += 1;
}
const solution = (input) => {
  let n = +input.shift();
  let cnt = 0;
  dfs(n, cnt);
  console.log(min);
};
solution(input);
