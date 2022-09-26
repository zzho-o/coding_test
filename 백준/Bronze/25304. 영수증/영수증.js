const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim());
function solution(input) {
  let total_price = +input.shift();
  const n = +input.shift();

  for (let i = 0; i < n; i++) {
    const [a, b] = input
      .shift()
      .split(" ")
      .map((item) => +item);
    total_price -= a * b;
  }
  total_price ? console.log("No") : console.log("Yes");
}
solution(input);
