const { time } = require('console');
const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(n){
    const dx = [-1,0,1,0]
    const dy = [0,1,0,-1]
    const [a,b] = n.shift().split(' ').map(item => +item)
    const cht = input.shift().split(' ').map(item => +item)
    const m = Array.from(new Array(a),() => n.shift().split(' ').map(item => +item))
    const visited = Array.from(new Array(a),() => new Array(b).fill(0))
    let dir = cht[2]
    let [i,j] = [cht[0],cht[1]]
    let result = 1
    visited[i][j] = 1
    let turn = 0
    while(true){
        dir = dir-1 < 0 ? dir + 3 : dir - 1
        const nx = i + dx[dir]
        const ny = j + dy[dir]
        if(turn === 4){
            const nnx = i - dx[dir]
            const nny = j - dy[dir]
            console.log(nnx,nny,dir)
            if(m[nnx][nny] === 0){
                i = nnx
                j = nny
            }
            else{
                break
            }
            turn = 0
        }
        if(!visited[nx][ny] && m[nx][ny] === 0){
            visited[nx][ny] = 1
            i = nx
            j = ny
            result++
            turn = 0
            continue
        }
        else{
            turn++
        }
    }
    console.log(result)
}