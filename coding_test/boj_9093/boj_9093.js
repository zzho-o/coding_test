const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const testCase = input.shift();
    input.forEach(item => {
        const str_arr = item.split(' ');
        str_arr.forEach((item, idx, arr) => {
            arr[idx] = item.split('').reverse().join('')
        })
        console.log(str_arr.join(' '))
    });
}