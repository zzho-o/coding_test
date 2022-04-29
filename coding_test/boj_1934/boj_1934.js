const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    input.shift();
    while(input.length){
        let [a,b] = input.shift().split(' ').map(item => +item);
        const [c,d] = [a,b];
        while(b > 0){
            [a,b] = [b,a%b];
        }
        console.log((c*d)/a);
    }
}