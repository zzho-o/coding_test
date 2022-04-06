const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
const left_stack = input.shift().split('');
const right_stack = []
const testCase = input.shift();
while(input.length){
    const command = input.shift();
    if(command.includes('P')) left_stack.push(command.split(' ')[1])
    else if(command.includes('L')) left_stack.length ? right_stack.push(left_stack.pop()) : null
    else if(command.includes('D')) right_stack.length ? left_stack.push(right_stack.pop()) : null
    else left_stack.pop()
}
console.log(left_stack.join('')+right_stack.join(''))
