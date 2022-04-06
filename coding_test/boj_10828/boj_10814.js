const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
const Stack = []
const ret = []
solution(input);
function push(str){
    const [cmd,val] = str.split(' ');
    Stack.push(+val);
}
function pop(){
    Stack.length ? ret.push(Stack.pop()) : ret.push(-1)
}
function solution(input){
    const n = input.shift();
    
    while(input.length){
        const cmd = input.shift()
        cmd.includes('push') ? push(cmd) : 
        cmd.includes('pop') ? pop() :
        cmd.includes('size') ? ret.push(Stack.length) :
        cmd.includes('empty') ? (Stack.length ? ret.push(0) : ret.push(1)) :
        cmd.includes('top') ? Stack.length ? ret.push(Stack[Stack.length-1]) : ret.push(-1) : null
    }
    console.log(ret.join('\n'))
}