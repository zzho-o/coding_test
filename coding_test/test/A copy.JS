const { group } = require('console');
const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const a = '';
    const n = +input.shift();
    const arr = input.shift().split(' ').map(item => +item);
    arr.sort((a,b) => b - a)
    const g = []
    while(arr.length){
        const b = []
        const num = arr[0]
        for(let i = 0; i < num; i++){
            b.push(arr.shift());
        }
        g.push(b)
    }
    console.log(g.length)
}