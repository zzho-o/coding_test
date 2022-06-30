const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const n = +input.shift()
    let a = new Set()
    const c = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    let asw = ''
    for(let i = 0;i < n; i++){
        const [cmd,num] = input.shift().split(' ')
        cmd === 'add' ? a.add(+num) :
        cmd === 'remove' ? a.delete(+num) :
        cmd === 'check' ? asw += +a.has(+num) :
        cmd === 'toggle' ? a.has(+num) ? a.delete(+num) : a.add(+num) :
        cmd === 'all' ? a = new Set([...c]) :
        a.clear()
    }
    console.log(asw)
}