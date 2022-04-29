const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function aa(a){
    for(let i = 2; i < a; i++){
        if(a%i === 0){
            return false
        }
    }
    return true
}
function solution(input){
    const [a,b] = input.shift().split(' ').map(item => +item);
    const asw = [];
    for(let i = a; i <= b; i++){
        aa(i) ? asw.push(i) : null;
    }
    console.log(asw.join('\n'))
}