const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
solution(input)
function solution(input){
    const [n,m] = input.shift().split(' ').map(item => +item)
    const temp = Array.from(new Array(n), () => new Array(m).fill(0))
    const data = Array.from(new Array(n), () => input.shift().split(' ').map(item => +item))
    const dx = [-1,0,1,0]
    const dy = [0,1,0,-1]
    let result = 0
    function virus(x,y){
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i]
            const ny = y + dy[i]
            if(nx >= 0 && nx < n && ny >= 0&& ny < m){
                if(temp[nx][ny] === 0){
                    temp[nx][ny] = 2
                    virus(nx,ny)
                }
            }
        }
    }
    function score(){
        let score = 0
        for(let i = 0; i < n; i++){
            for(let j = 0; j < m; j++){
                temp[i][j] === 0 ? score++ : null
            }
        }
        return score
    }
    function dfs(cnt){
        if(cnt === 3){
            for(let i = 0; i < n; i++){
                temp[i] = [...data[i]]
            }
            for(let i = 0; i < n; i++){
                for(let j = 0; j < m; j++){
                    temp[i][j] === 2 ? virus(i,j) : null
                }
            }
            result = Math.max(result,score())
            return
        }
        for(let i = 0; i < n; i++){
            for(let j = 0; j < m; j++){
                if(data[i][j] === 0){
                    data[i][j] = 1
                    cnt++
                    dfs(cnt)
                    data[i][j] = 0
                    cnt--
                }
            }
        }
    }
    dfs(0)
    console.log(result)
}
// 7 7
// 2 0 0 0 1 1 0
// 0 0 1 0 1 2 0
// 0 1 1 0 1 0 0
// 0 1 0 0 0 0 0
// 0 0 0 0 0 1 1
// 0 1 0 0 0 0 0
// 0 1 0 0 0 0 0