const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim())
solution(input)
function solution(input){
    const [N, stages] = [5,[2,1,2,6,2,4,3,3]]
    stages.sort((a,b) => b - a)
    const result = []
    for(let i = N + 1; i > 0; i--){
        let count = 0;
        while(stages[0] === i){
            count++
            stages.shift()
        }
        result.unshift([i, count])
        if(count === 0){
            result[0].push(0)
            continue
        }
        let devider = 0;
        for(let i = 0; i < result.length; i++){
            devider += result[i][1]
        }
        result[0].push(count/devider)
    }
    const arr = []
    for(let i of result){
        i[0] < N+1 ? arr.push(i) : null
    }
    arr.sort((a,b) => b[2] > a[2] ? 1 : b[2] < a[2] ? -1 : a[0] - b[0])
    console.log(arr)
}