const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const [n,m] = input.shift().split(' ').map(item => +item)
    const data = Array.from(new Array(n),() => input.shift().split(' ').map(item => +item))
    const temp = Array.from(new Array(n),() => new Array(m).fill(0))
    dx = [1,-1,0,0]
    dy = [0,0,1,-1]
    result = 0
    function virus(x,y){
        for(let i = 0;i < 4; i++){
            const nx = x + dx[i]
            const ny = y + dy[i]
            if(nx >= 0 && ny >= 0 && nx < n && ny < m){
                if(temp[nx][ny] === 0){
                    temp[nx][ny] = 2
                    virus(nx,ny)
                }
            }
        }
    }
    function c(){
        let count = 0
        for(let i of temp){
            for(let j of i){
                if(j === 0)count++
            }
        }
        return count
    }
    function dfs(cnt){
        if(cnt === 3){
            for(let i = 0; i < n; i++){
                for(let j = 0; j < m; j++){
                    temp[i][j] = data[i][j]
                }
            }
            for(let i = 0; i < n; i++){
                for(let j = 0; j < m; j++){
                    if(temp[i][j] === 2){
                        virus(i,j)
                    }
                }
            }
            result = Math.max(result,c())
            return
        }
        for(let i = 0; i < n; i++){
            for(let j = 0; j < m; j++){
                if(data[i][j] === 0){
                    data[i][j] = 1
                    cnt++
                    dfs(cnt)
                    cnt--
                    data[i][j] = 0
                }
            }
        }
    }
    dfs(0)
    console.log(result)
}