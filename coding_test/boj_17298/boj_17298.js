const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const n = +input.shift();
    const arr = input.shift().split(' ').map(item => +item);
    const stack = [0];
    const asw = new Array(n).fill(-1);
    for(let i = 1; i < n; i++){
        while(stack.length && arr[i] > arr[stack[stack.length-1]]){
            asw[stack.pop()] = arr[i];
        }
        stack.push(i);
    }
    console.log(asw.join(' '))
}