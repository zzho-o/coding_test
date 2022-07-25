const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const n = +input.shift()
    const k = +input.shift()
    const g_map = Array.from(new Array(n+2),() => new Array(n+2).fill(0))
    const dx = [0,1,0,-1]
    const dy = [1,0,-1,0]
    let x = 1
    let y = 1
    let d = 0
    const snake = [[1,1]]
    g_map[x][y] = 3
    for(let i in g_map){
        for(let j in g_map){
            if(i === '0' || j === '0' || +i === n+1 || +j === n+1){
                g_map[i][j] = 1
            }
        }
    }
    for(let i = 0; i < k; i++){
        const [a,b] = input.shift().split(' ').map(item => +item)
        g_map[a][b] = 2
    }
    let time = 0
    let cmd_num = +input.shift()
    let flag = 0
    for(let i = 0; i < cmd_num; i++){
        
        let [num,cmd] = input.shift().split(' ')
        num = +num
        
        const cur_time = num - time
        for(let move = 0; move < cur_time; move++){
            time++
            x += dx[d]
            y += dy[d]
            if(g_map[x][y] === 1 || g_map[x][y] === 3){
                flag = 1
                break
            }
            snake.push([x,y])
            if(g_map[x][y] === 2){
                g_map[x][y] = 3
            }
            else{
                g_map[x][y] = 3
                const [a,b] = snake.shift()
                g_map[a][b] = 0
            }
        }
        if(flag)break
        
        cmd === 'D' ? d++ : d--
        d < 0 ? d += 4 : d %= 4
    }
    while(!flag){
        time++
        x += dx[d]
        y += dy[d]
        if(g_map[x][y] === 1 || g_map[x][y] === 3){
            flag = 1
        }
    }

    console.log(time)
}