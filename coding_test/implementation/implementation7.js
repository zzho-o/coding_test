const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(item => item.trim());
console.log(solution(input))
function solution(input){
    const N = +input.shift()
    const K = +input.shift()
    const board = Array.from(new Array(N),() => new Array(N).fill(0))
    board[0][0] = 2
    for(let i = 0; i < K; i++){
        const [x,y] = input.shift().split(' ').map(item => +item)
        board[x-1][y-1] = 1
    }
    const L = +input.shift()
    const turn = [[0,1],[1,0],[0,-1],[-1,0]]
    let [cur_x,cur_y] = [0,0]
    let time = 0
    let bug_tail = [[0,0]]
    for(let i = 0; i < L; i++){
        let [x,c] = input.shift().split(' ').map(item => +item)
        while(x !== 0){
            for(let e of board){
                console.log(e.join(''))
            }
            console.log()
            time++
            x--
            cur_x += turn[0][0]
            cur_y += turn[0][1]
            if(0 > cur_x || cur_x >= N || 0 > cur_y|| cur_y >= N || board[cur_x][cur_y] === 2){
                return time
            }
            if(board[cur_x][cur_y] !== 1){
                const [tail_x,tail_y] = bug_tail.shift()
                board[tail_x][tail_y] = 0
            }
            bug_tail.push([cur_x,cur_y])
            board[cur_x][cur_y] = 2
        }
        c === 'L' ? turn.unshift(turn.pop()) : turn.push(turn.shift())
    }
}
// 6
// 3
// 3 4
// 2 5
// 5 3
// 3
// 3 D
// 15 L
// 17 D