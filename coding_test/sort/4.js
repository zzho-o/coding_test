const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim())
solution(input)
function solution(input){
    const N = +input.shift()
    const nums = []
    while(input.length){
        nums.push(+input.shift())
    }
    nums.sort((a,b) => a - b)
    let result = 0;
    while(nums.length > 1){
        const [num1,num2] = [nums.shift(),nums.shift()]
        const sum = num1+num2
        result += sum
        nums.push(sum)
    }
    console.log(result)
}