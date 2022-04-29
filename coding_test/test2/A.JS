const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const n = +input.shift();
    const m = +input.shift();
    const graph = Array.from(new Array(n+1),() => new Array(n+1).fill(Infinity));
    for(let a = 1; a < n+1; a++){//자기 자신 노드 거리 0 채우기
        for(let b = 1; b < n+1; b++){
            a === b ? graph[a][b] = 0 : null; 
        }
    }
    for(let i = 0; i < m; i++){//각 간선 값들 초기화
        const [a,b,c] = input.shift().split(' ').map(item => +item);
        graph[a][b] = c;
    }
    for(let k = 1; k < n+1; k++){
        for(let a = 1; a < n+1; a++){
            for(let b = 1; b <n+1; b++){//a->b 값과 a->k 경유 k->b 값 중 작은 값으로 갱신
                graph[a][b] = Math.min(graph[a][b],graph[a][k]+graph[k][b])
            }
        }
    }
    let result = ''
    for(let a = 1; a < n+1; a++){
        for(let b = 1; b < n+1; b++){
            result += `${graph[a][b]} `;
        }
        result += '\n';
    }
    console.log(result)
}