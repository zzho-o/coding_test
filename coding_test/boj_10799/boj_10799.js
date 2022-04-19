const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    let stick = input.shift();
    let stack = 0;
    let result = 0;
    for(let i in stick){
        stick[i] === '(' ? stack++ :
        stick[i-1] === '(' ?  (result += --stack) : (--stack)+1 && result++
    }
    console.log(result)
}