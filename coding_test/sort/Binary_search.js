const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
const arr = [5,7,9,0,3,1,6,2,4,8]
arr.sort();
const solution = input => {
    console.log(arr)
}
solution(input);