const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const n = +input.shift();
    const arr = input.shift().split(' ').map(item => +item);
    const num_cnt = []
    const asw = new Array(n).fill(-1)
    const stack = [0];
    for(let i of arr){
        num_cnt[i] === undefined ? num_cnt[i] = 1 : num_cnt[i]++;
    }

    for(let i = 1 ; i < n; i++){
        while(stack.length && num_cnt[arr[stack[stack.length-1]]] < num_cnt[arr[i]]){
            asw[stack.pop()] = arr[i];
        }
        stack.push(i)
    }
    console.log(asw.join(' '))
}