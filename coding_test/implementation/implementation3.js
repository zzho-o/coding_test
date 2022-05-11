const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    
}
// K1KA5CB7