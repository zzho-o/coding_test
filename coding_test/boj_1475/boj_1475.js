const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const arr = new Array(10).fill(0)
    const num = input.shift().split('').map(item => +item)
    for(let i of num){
        arr[i]++
    }
    arr[6] =Math.ceil((arr[9]+arr[6])/2)
    arr.pop()
    console.log(Math.max(...arr))
}