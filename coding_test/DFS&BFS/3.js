const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
solution(input)
function solution(input){
    const [n,k] = input.shift().split(' ').map(item => +item)
    const dx = [-1,1,0,0]
    const dy = [0,0,-1,1]
    const cylinder = Array.from(new Array(n),() => new Array(n))
    const q = []
    for(let i = 0; i < n; i++){
        cylinder[i] = input.shift().split(' ').map(item => +item)
        for(let j = 0; j < n; j++){
            cylinder[i][j] !== 0 ? q.push([cylinder[i][j],0,i,j]) : null
        }
    }
    q.sort((a,b) => a[0] - b[0])
    const [s,x,y] = input.shift().split(' ').map(item => +item)
    function infect(virus,t,x,y){
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i]
            const ny = y + dy[i]
            if(nx >= 0 && nx < n && ny >= 0 && ny < n){
                if(cylinder[nx][ny] === 0){
                    cylinder[nx][ny] = virus
                    q.push([virus,t+1,nx,ny])
                }
            }
        }
    }
    while(q.length){
        const [virus,t,x,y] = q.shift()
        if(t === s) break
        infect(virus,t,x,y)
    }
    console.log(cylinder[x-1][y-1])
}
// 3 3
// 1 0 2
// 0 0 0
// 3 0 0
// 1 2 2