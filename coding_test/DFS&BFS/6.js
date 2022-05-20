const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
solution(input)
function solution(input){
    const n = +input.shift()
    const nums = input.shift().split(' ').map(item => +item)
    let [add,sub,mul,div] = input.shift().split(' ').map(item => +item)
    let max = -Infinity
    let min = Infinity
    function dfs(i,now){
        if(i === n){
            min = Math.min(min,now)
            max = Math.max(max,now)
        }
        else{
            if(add > 0){
                add -= 1
                dfs(i+1,now+nums[i])
                add += 1
            }
            if(sub > 0){
                sub -= 1
                dfs(i+1,now-nums[i])
                sub += 1
            }
            if(mul > 0){
                mul -= 1
                dfs(i+1,now*nums[i])
                mul += 1
            }
            if(div > 0){
                div -= 1
                dfs(i+1,Math.floor(now/nums[i]))
                div += 1
            }
        }
    }
    dfs(1,nums[0])
    console.log(max,min)
}
// 2
// 5 6
// 0 0 1 0