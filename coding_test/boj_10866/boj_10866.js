const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    input.shift();
    const arr = []
    const asw = [];
    while(input.length){
        const cmd = input.shift();
        cmd.includes('push') ? cmd.includes('front') ? arr.unshift(cmd.split(' ')[1])  : arr.push(cmd.split(' ')[1]) :
        cmd.includes('pop') ? arr.length ? cmd.includes('front') ?  asw.push(arr.shift()) : asw.push(arr.pop()) : asw.push(-1) :
        cmd.includes('front') ? arr.length ? asw.push(arr[0]) : asw.push(-1) :
        cmd.includes('back') ? arr.length ? asw.push(arr[arr.length-1]) : asw.push(-1) :
        cmd.includes('size') ? asw.push(arr.length) :
        arr.length ? asw.push(0) : asw.push(1);
    }
    console.log(asw.join('\n'))
}