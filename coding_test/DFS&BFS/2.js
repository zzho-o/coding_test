const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
solution(input)
function solution(input){
    const [N,M,K,X] = input.shift().split(' ').map(item => +item)
    const arr = Array.from(new Array(N+1),() => new Array())
    const distance = new Array(N+1).fill(-1)
    distance[X] = 0
    while(input.length){
        const [A,B] = input.shift().split(' ').map(item => +item)
        arr[A].push(B)
    }
    const q = [X]
    while(q.length){
        now = q.shift()
        for(let next_node of arr[now]){
            if(distance[next_node] === -1){
                distance[next_node] = distance[now] + 1
            }
            q.push(next_node)
        }
    }
    const asw = []
    for(let i in distance){
        if(distance[i] === K ){
            asw.push(i)
        }
    }
    asw.length === 0 ? console.log(-1) : console.log(asw.join('\n'))
}