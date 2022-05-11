const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const N = +input.shift();
    const coin = input.shift().split(' ').map(item => +item);
    const sum = coin.reduce((acc,cur) => acc+cur,0)
    coin.sort((a,b) => b - a);
    for(let i = 1; i < sum; i++){
        let rest_coin = i;
        for(let j of coin){
            rest_coin >= j ? rest_coin -= j : null;
        }
        if(rest_coin !== 0){
            console.log(i);
            break;
        }
    }
}
// 5
// 3 2 1 1 9