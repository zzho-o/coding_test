const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
//1부터 연결된 노드(vertex)
const graph = [[],
                [2,3,8],
                [1,7],
                [1,4,5],
                [3,5],
                [3,4],
                [7],
                [2,6,8],
                [1,7]
            ]
let answer = ''
const checked = new Array(graph.length).fill(false);
const dfs = (graph,v,visited) => {
    visited[v] = true;
    answer += `${v} `
    for(let i of graph[v]){
        if(!visited[i]){
            dfs(graph,i,visited)
        }
    }
}
const solution = (input) => {
    //재귀 이용한 dfs
    dfs(graph,1,checked);
    console.log(checked);
    console.log(answer)
}
solution(input);