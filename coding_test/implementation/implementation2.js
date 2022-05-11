const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const s = input.shift()
    const num_bund = '0123456789'
    const alp = []
    const num = []
    for(let i of s){
        num_bund.includes(i) ? num.push(+i) : alp.push(i)
    }
    console.log(alp.sort().join('')+num.reduce((acc,cur) => acc + cur,0))
}
// K1KA5CB7