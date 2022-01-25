const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
const solution = input => {
    const c = +input.shift()
    const num = input;
    num.sort((a,b) => a-b)
    for(let i = 0; i < c; i++){
        console.log(num[i])
    }
}
solution(input);