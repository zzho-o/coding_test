const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.trim());
const solution = input => {
    const c = +input.shift();
    const word = input;
    const one_only = []
    for(let i of word){
        if(!one_only.includes(i)){
            one_only.push(i);
        }
    }
    one_only.sort((a,b) => {
        if(a.length !== b.length){
            return a.length - b.length;
        }
        else{
            if(a > b){
                return 1;
            }
            else{
                return -1;
            }
        }
    })
    console.log(one_only.join('\n'))
}
solution(input);