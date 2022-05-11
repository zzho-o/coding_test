const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const s = input.shift();
    const center = Math.floor(s.length/2)
    const left = s.slice(0,center);
    const right = s.slice(center);
    const left_val = left.split('').map(item => +item).reduce((acc,cur) => acc+cur,0)
    const right_val = right.split('').map(item => +item).reduce((acc,cur) => acc+cur,0)
    left_val === right_val ? console.log("LUCKY") : console.log("READY");
}
// 123402