const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());

const solution = input => {
    let cnt = +input[0];
    let i = 0;
    while(cnt>0){
        i++;
        const s = i.toString();
        s.includes('666') ? cnt-- : null;
    }
    console.log(i);
}
solution(input);