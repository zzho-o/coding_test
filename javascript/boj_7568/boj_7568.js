const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
let solution = input => {
    const c = +input[0];
    input.shift();
    const peaple = input;
    const rank = [];
    for(let i = 0; i < c; i++){
        let cnt = 1;
        const alp = peaple[i].split(' ').map(item => +item);
        for(let j = 0; j < c; j++){
            const bet = peaple[j].split(' ').map(item => +item);
            if(bet[0] > alp[0] && bet[1] > alp[1]){
                cnt++;
            }
        }
        rank.push(cnt);
    }
    console.log(rank.join(' '))
}
solution(input);