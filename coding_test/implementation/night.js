const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
input = ['a1']
const solution = input => {
    const steps = [[1,2],[2,1],[-1,-2],[-2,-1],[-1,2],[2,-1],[1,-2],[-2,1]]
    let cnt = 0;
    const col = input[0].charCodeAt(0) - 96;
    const row = +input[0][1];
    for(let step of steps){
        const next_row = row + step[1];
        const next_col = col + step[0];
        0 < next_row && next_row < 9 &&
        0 < next_col && next_col < 9
        ? cnt++ : null;
    }
    console.log(cnt);
}
solution(input);