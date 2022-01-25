const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());

const solution = input => {
    const c = +input[0];
    input.shift()
    const dot = []
    for(let i = 0; i < c; i++){
         dot.push(input[i].split(' ').map(item => +item))
    }
    let anw = '';
    dot.sort((a,b) => {
        if(a[0] === b[0]){
            return a[1] - b[1];
        }
        else{
            return a[0] - b[0];
        }
    }).forEach(item => {
        anw += `${item[0]} ${item[1]}\n`
    })
    console.log(anw)
}
solution(input);