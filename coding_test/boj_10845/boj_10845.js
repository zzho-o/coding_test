const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function push(arr,val){
    val = val.split(' ');
    arr.push(+val[1]);
}
function solution(input){
    input.shift();
    const asw = []
    const queue = []
    while(input.length){
        const s = input.shift();
        s.includes('push') ? push(queue,s) :
        s.includes('pop') ? queue.length ? asw.push(queue.shift()) : asw.push(-1) :
        s.includes('size') ? asw.push(queue.length) :
        s.includes('empty') ? queue.length ? asw.push(0) : asw.push(1) :
        s.includes('front') ? queue.length ? asw.push(queue[0]) : asw.push(-1) :
        queue.length ? asw.push(queue[queue.length-1]) : asw.push(-1) 
    }
    console.log(asw.join('\n'))
}