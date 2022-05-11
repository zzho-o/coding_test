const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(s) {
    let min_len = s.length;
    for(let step = 1; step < Math.floor(s.length/2) +1; step++){
        let now_s = '';
        let prev = s.slice(0,step);
        let cnt = 1
        for(let j = step; j < s.length; j += step){
            if (prev === s.slice(j,j+step)){
                cnt++
            }
            else{
                cnt === 1 ? now_s += prev : now_s += (cnt + prev)
                prev = s.slice(j,j+step)
                cnt = 1
            }
        }
        cnt === 1 ? now_s += prev : (now_s += cnt + prev)
        min_len = Math.min(min_len,now_s.length)
    }

    return min_len;
}
// K1KA5CB7