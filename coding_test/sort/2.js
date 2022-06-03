const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim())
solution(input)
function solution(input){
    const n = +input.shift()
    const house = input.shift().split(' ').map(item => +item)
    house.sort((a,b) => a - b)
    console.log(house[Math.floor((n-1)/2)])
}