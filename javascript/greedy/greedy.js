const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
const solution = input => {
    let c = +input[0];
    let coin_cnt = 0;
    coin_type = [500,100,50,10]
    for(let coin of coin_type){
        coin_cnt += Math.floor(c/coin);
        console.log(coin,Math.floor(c/coin))
        c %= coin;
    }
    console.log(`총 동전 개수 = ${coin_cnt}`)
}
solution(input);