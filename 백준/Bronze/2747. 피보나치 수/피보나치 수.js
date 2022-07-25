const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const n = +input.shift()
    const pivo = [0,1,1]
    for(let i = 3; i <= n; i++){
        pivo.push(pivo[i-1] + pivo[i-2])
    }
    console.log(pivo[n])
}