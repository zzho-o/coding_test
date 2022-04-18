const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const regExp = /<[a-z 0-9]{0,}>|[a-z 0-9]+/gi;
    let str = input.shift()
    let asw = ''
    str.match(regExp).map(item => item[0] === '<' ? asw += item : asw += item.split(' ').map(str => str.split('').reverse().join('')).join(' '));
    console.log(asw)
}