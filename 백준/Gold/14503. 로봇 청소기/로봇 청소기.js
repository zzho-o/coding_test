const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);

function solution(input){
    const [n,m] = input.shift().split(' ').map(item => +item)
    const dx = [-1,0,1,0]
    const dy = [0,1,0,-1]
    let [x,y,d] = input.shift().split(' ').map(item => +item)
    const room = Array.from(new Array(n),() => input.shift().split(' ').map(item => +item))
    let cnt = 1
    room[x][y] = 2
    let rot = 0
    while(true){
        d === 0 ? d = 3 : d--
        rot++
        let nx = x + dx[d]
        let ny = y + dy[d]
        if(room[nx][ny] === 0){
            room[nx][ny] = 2
            x = nx
            y = ny
            rot = 0
            cnt++
            continue
        }
        if(rot === 4){
            nx = x - dx[d]
            ny = y - dy[d]
            if(room[nx][ny] === 1){
                
                break
            }
            x = nx
            y = ny
            rot = 0
        }

    }
    console.log(cnt)
}