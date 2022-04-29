const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input) {
    const [N, K] = input.shift().split(' ').map(item => +item);
    const arr = new Array(K).fill(Math.floor(N/K))
    for(let i = 0; i < N%K; i++){
        arr[i]++;
    }
    console.log(arr)
    arr.forEach((item,idx,arr) => {
        const subArr = arr.slice(0,idx).concat(arr.slice(idx+1))
        subArr.includes(item) ? arr[idx]++ && (index = arr.findIndex((val,IDX) => idx !== IDX && val === Math.min(...arr))) : null;
        arr[index]--;
        console.log(arr)
    })
    console.log(arr)
}
