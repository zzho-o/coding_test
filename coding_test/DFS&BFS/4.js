const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
s = input.shift()
console.log(solution(s))
function solution(s){
    if(s === '')return s
    let u = ''
    let cnt = 0
    for(let i of s){
        if(i === '(')cnt++
        else cnt--
        u += i
        if(cnt === 0)break
    }
    let v = s.slice(u.length)
    if(u[0] === '(') return u + solution(v)
    else{
        let temp = '(' + solution(v) + ')'
        // if(u.length)
        temp = temp + u.slice(1,u.length-1).split('').map(s => s === ')' ? '(' : ')')
        return temp
    }
}