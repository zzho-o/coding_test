const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const [N,K] = input.shift().split(' ').map(item => +item);
    const arr = []
    const asw = []
    cnt = -1
    for (let i = 0 ; i < N; i++){
        arr.push(i+1)
    }
    while(arr.length){
        const len = arr.length;
        cnt += K
        while(len <= cnt)cnt-=len
        asw.push(arr.splice(cnt,1))
        cnt--;
    }
    console.log(`<${asw.join(', ')}>`)
}