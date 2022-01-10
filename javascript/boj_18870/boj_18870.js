const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
const solution = input => {
    const c = +input[0];
    input.shift();
    const arr = input[0].split(' ').map(item => +item);
    const num = Array.from(new Set([...arr])).sort((a,b) => a - b);
    const obj = {};
    num.forEach((item,idx) => obj[item] = idx);
    const answer = [];
    for(let i = 0; i < arr.length; i++){
        answer.push(obj[arr[i]])
    }
    console.log(answer.join(' '))
}
solution(input);