const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim())
solution(input)
function solution(input){
    'strict mode'
    const arr = input.shift().split(' ')
    let cnt = 0
    arr.map(val => console.log(val.search(/[1-9]{1,}/)))
}
// 1 2 4 8 9