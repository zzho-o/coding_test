const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim())
solution(input)
function solution(input){
    'use strict'
    const [n,c] = input.shift().split(' ').map(item => +item)
    console.log(n,c)

}