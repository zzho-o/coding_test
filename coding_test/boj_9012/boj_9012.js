const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const testCase = input.shift();
    const asw = []
    input.forEach(item => {
        while(true){
            const idx = item.indexOf('()')
            if(idx === -1)break;
            item = item.substring(0,idx)+item.substring(idx+2)
        }
        item.length === 0 ? asw.push("YES") : asw.push("NO")
    })
    console.log(asw.join('\n'));
}