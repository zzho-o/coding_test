const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const n = +input.shift()
    const arr = input.shift().split(' ').map(item => +item);
    arr.sort((a,b) => a-b);
    let result = 0;
    let cnt = 0;
    for(let i of arr){
        cnt++;
        cnt >= i ? (result += 1)+1 && (cnt = 0) : null;
        console.log(i,cnt,result)
    }
    console.log(result)
}
// 5
// 2 3 1 2 2