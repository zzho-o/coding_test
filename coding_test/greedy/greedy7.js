const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const s = input.shift();
    let [a,b] = [s[0],String(+!+s[0])];
    let cnt = [0,0];
    if (s[0] === '0'){
        cnt[0]++;
    }
    else{
        cnt[1]++;
    }
    for(let i = 1; i < s.length; i++){
        s[i-1] !== s[i] ? cnt[+s[i]]++ : null;
    }
    console.log(Math.min(...cnt))
}
// 0001100