const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    // n = 노드 개수,m = 간선 개수
    const [n,m] = input.shift().split(' ').map(item => +item);
    const start = +input.shift(); //시작 노드
    const graph = Array.from(new Array(n+1),() => new Array(0)) // 각 노드 최단 경로 배열
    const visited = new Array(n+1).fill(false) //방문 기록
    const distance = new Array(n+1).fill(Infinity)
    for(let i = 0; i < m; i++){//간선 정보 입력 받기
        const [a,b,c] = input.shift().split(' ').map(item => +item)//a->b 비용 = c
        graph[a].push([b,c])
    }
    function get_smallest_node(){
        let min_value = Infinity;
        let idx = 0; // 가장 최단 거리가 짧은 노드(idx)
        for(let i = 1; i < n+1; i++){
            //최소 값보다 거리가 더 짧고, 방문하지 않았다면
            distance[i] < min_value && !visited[i] ? (min_value = distance[i]) + 1 && (idx = i) : null
        }
        return idx
    }
    
    function dijkstra(start){
        distance[start] = 0;
        visited[start] = true;
        for(let i of graph[start]){
            distance[i[0]] = i[1]
            
        }
        for(let i = 0; i < n - 1; i++){
            const now = get_smallest_node();
            console.log(now)
            visited[now] = true;
            for(let j of graph[now]){
                const cost = distance[now]+j[1]
                cost < distance[j[0]] ? distance[j[0]] = cost : null;
            }
        }
    }
    dijkstra(start);
    // for(let i = 1; i < n+1; i++){
    //     console.log(distance[i])
    // }
}