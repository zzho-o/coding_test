const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(item => item.trim());
solution(input)
function solution(input){
}
// 6
// 3
// 3 4
// 2 5
// 5 3
// 3
// 3 D
// 15 L
// 17 D