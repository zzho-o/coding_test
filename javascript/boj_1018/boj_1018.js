const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
const [N,M] = input[0].split(' ').map(item => +item);
input.shift();
const board = input;
let min = [];
const W = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW'
]
const B = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB'
]
const White = (i,j) => {
    let cnt = 0;
    for(let a = i; a < i+8; a++){
        for(let b = j; b < j+8; b++){
            if(W[a-i][b-j] !== board[a][b]){
                cnt++;
            }
        }
    }
    return cnt;
}
const Black = (i,j) => {
    let cnt = 0;
    for(let a = i; a < i+8; a++){
        for(let b = j; b < j+8; b++){
            if(B[a-i][b-j] !== board[a][b]){
                cnt++;
            }
        }
    }
    return cnt;
}
const solution = input => {
    for(let i = 0; i < N-7; i++){
        for(let j = 0; j < M-7; j++){
            min.push(White(i,j));
            min.push(Black(i,j));
        }
    }
    console.log(Math.min(...min))
}
solution(input);