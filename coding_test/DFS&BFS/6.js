const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
solution(input)
function solution(input){
    const n = +input.shift()
    const board = []
    const teacher = []
    const spaces = []
    const dx = [-1,1,0,0]
    const dy = [0,0,-1,1]
    for(let i = 0; i < n; i++){
        board.push(input.shift().split(' '))
        for(let j = 0; j < n; j++){
            board[i][j] === 'T' ? teacher.push([i,j]) : null
            board[i][j] === 'X' ? spaces.push([i,j]) : null
        }
    }
    function check(dir,i,j){
        if(dir === 0){
            while(i >= 0){
                if(board[i][j] === 'O')return false
                if(board[i][j] === 'S')return true
                i--
            }
        }
        if(dir === 1){
            while(i < n){
                if(board[i][j] === 'O')return false
                if(board[i][j] === 'S')return true
                i++
            }
        }
        if(dir === 2){
            while(j >= 0){
                if(board[i][j] === 'O')return false
                if(board[i][j] === 'S')return true
                j--
            }
        }
        if(dir === 3){
            while(j < n){
                if(board[i][j] === 'O')return false
                if(board[i][j] === 'S')return true
                j++
            }
        }
        return false
    }
    function process(){
        for(let i of teacher){
            const [x,y] = i
            for(let d = 0; d < 4; d++){
                if(check(d,x,y)) return true
            }
        }
        return false
    }
    function dfs(cnt){
        if(cnt === 3){
            const result = process()
            if(result) return result
            return false
        }
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                if(board[i][j] === 'X'){
                    cnt++
                    board[i][j] = 'O'
                    const result = dfs(cnt)
                    if(result === false)return false
                    cnt--
                    board[i][j] = 'X'
                }
            }
        }
        return true
    }
    const asw = dfs(0)
    if(asw)console.log('NO')
    else console.log('YES')
}
// 5
// X S X X T
// T X S X X
// X X X X X
// X T X X X
// X X T X X