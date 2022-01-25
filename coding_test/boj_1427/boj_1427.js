const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());

const solution = input => {
    const c = input[0];
    const num = [];
    for(let i = 0; i < c.length; i++){
        num.push(+c[i]);
    }
    num.sort((a,b) => b - a);
    let asw = ''
    for(let i = 0; i < c.length; i++){
        asw += num[i].toString();
    }
    console.log(asw)
}
solution(input);
