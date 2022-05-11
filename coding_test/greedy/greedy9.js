const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const [N,K] = input.shift().split(' ').map(item => +item);
    const arr = input.shift().split(' ').map(item => +item);
    const cnt_ball = new Array(11).fill(0);
    for(let i of arr){
        cnt_ball[i]++;
    }
    let asw = 0
    for(let i = 0; i < cnt_ball.length-1; i++){
        if(cnt_ball[i] === 0)continue;
        for(let j = i + 1; j < cnt_ball.length; j++){
            asw += cnt_ball[i]*cnt_ball[j];
        }
    }
    console.log(asw)
}
// 5 3
// 1 3 2 3 2