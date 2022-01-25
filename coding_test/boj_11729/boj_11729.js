const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
let asw = []
let Hanoi =  (num, from, other, to) => {
    if(num > 1){
        Hanoi(num-1,from,to,other);
    }
    asw.push(`${from} ${to}`)
    if(num > 1){
        Hanoi(num-1,other,from,to);
    }
}
let solution = input => {
    const num = +input[0];
    console.log(2**num-1);
    Hanoi(num,1,2,3);
    console.log(asw.join('\n'))
}
solution(input);